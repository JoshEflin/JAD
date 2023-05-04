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
  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    getRecipe(foodStr: String!): [Recipe]
  }
`;

module.exports = typeDefs;
