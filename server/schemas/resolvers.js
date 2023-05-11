const { AuthenticationError } = require("apollo-server-express");
const { User, Ingredient } = require("../models");
const { signToken } = require("../utils/auth");
const { apiCall } = require("./gettingdata");
const fs = require("fs");
const stripe = require('stripe')(process.env.STRIPE_KEY)

const resolvers = {
  Query: {
    users: async () => {
      return User;
    },
    getItems: async () => {
      return Ingredient.find({});
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const line_items = [];

      console.log(args.products);

      for (let i = 0; i < args.products.length; i++) {
        const product = await stripe.products.create({
          name: args.products[i].foodItem,
          description: args.products[i].description,
          images: [args.products[i].photo]

        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: args.products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: args.products[i].stock
        });
      }
      console.log(line_items);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      return { session: session.id };
    }
  },



  Mutation: {

    getRecipe: async (parent, { foodStr }) => {
      const recipes = await apiCall(foodStr);
      const dbItems = await Ingredient.find({});
      const updatedRecipes = recipes.map((recipe) => {
        return {
          ...recipe,
          ingredients: recipe.ingredients.map((ingredient) => {
            const found = dbItems.find((item) => {
              return item.name === ingredient.food.toUpperCase();
            });
            return {
              ...ingredient,
              inStock: found ? true : false,
            };
          })
        }
          
      });
      console.log(updatedRecipes)
      return updatedRecipes
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({
        $or: [{ password: password }, { email: email }],
      });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    item: async (parent, { foodItem }) => {
      const food = await Ingredient.findOne({ name: foodItem });
      if (!food) {
        return console.log("out of stock");
      }
      return food;
    },
    stock: async (parent, { name, stock }) => {
      const filter = { name };
      const update = { stock };
      const updatedFood = await Ingredient.findOneAndUpdate(filter, update, {
        returnOriginal: false,
      });
      if (!updatedFood) {
        return console.log("Something went Wrong!");
      }
      return updatedFood;
    },
  },
};

module.exports = resolvers;
