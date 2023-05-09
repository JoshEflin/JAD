const { AuthenticationError } = require("apollo-server-express");
const { User, Ingredient } = require("../models");
const { signToken } = require("../utils/auth");
const getRecipe = require("./gettingdata");
const fs = require("fs");

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
        return User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },

  Mutation: {
    getRecipe: async (parent, { foodStr }) => {
      // console.log(foodStr)
      const recipes = await getRecipe(foodStr);
      // console.log(recipes)
      // fs.writeFile("test.txt", JSON.stringify(recipes[0]), { encoding: "utf-8"}, function(err) {
      //   if (err) {
      //     console.error("you screwed it up");
      //   }
      // })      
      return recipes;
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ $or: [{ password: password }, { email: email }] });

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
      if (!food) { return (console.log("out of stock")) }
      return food;
    },
    stock: async (parent, { name, stock }) => {
      const filter = { name }
      const update = { stock }
      const updatedFood = await Ingredient.findOneAndUpdate(filter, update, {
        returnOriginal: false
      });
      if (!updatedFood) { return console.log("Something went Wrong!") }
      return updatedFood;
    }
  },
};

module.exports = resolvers;
