const { gql } = require('apollo-server-express');

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
    type Recipe {
        label:String!
        image:String
        healthLabels:String
        cautions:String
        ingredients:String
        calories:String
        mealType:String
        dishType:String
        totalNutrients:String
    }
    type Query {
        users: [User]
        user(username: String!): User
        me: User
        getRecipe: Recipe
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;