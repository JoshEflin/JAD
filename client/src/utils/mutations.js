
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const GET_RECIPE = gql`
mutation getRecipe($foodStr: String!) {
  getRecipe(foodStr: $foodStr) {
    calories
    dishType
    healthLabels
    image
    label
    mealType
    ingredients {
      food
      foodId
      image
      measure
      quantity
      text
      weight
    }
  }
}`
