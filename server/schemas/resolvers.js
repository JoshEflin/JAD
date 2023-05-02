const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');
require('dotenv').config()
const id = process.env.API_ID;
const key = process.env.API_KEY;

const resolvers = {
  Query: {
    users: async () => {
      return User;
    },
    getData: async (query) => {
      return fetch.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${id}&app_key=${key}`);

    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },


  }

}

module.exports = resolvers;