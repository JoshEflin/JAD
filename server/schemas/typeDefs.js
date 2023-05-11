const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Ingredient {
    name: String
    price: Float
    stock: Float
    photo: String
    description: String
  }
  type Ingredients {
    text: String
    quantity: Float
    measure: String
    food: String
    weight: Float
    foodCategory: String
    foodId: String
    image: String
  }
  type Recipe {
    label: String
    image: String
    calories: Float
    
    dishType: [String]
    mealType: [String]
    ingredients: [Ingredients]
    cautions: [String]
    healthLabels: [String]
  }

  type Checkout {
    session: ID
  }


  type Query {
    users: [User]
    user(username: String!): User
    me: User
    getItems: [Ingredient]
    checkout(products: [String]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    getRecipe(foodStr: String!): [Recipe]
    item(foodItem: String!): Ingredient
    stock(name: String, stock: Int):Ingredient
  }
`;

module.exports = typeDefs;
