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
}`;

// FOR CART
export const GET_ITEM = gql`
mutation Item($foodItem: String!) {
  item(foodItem: $foodItem) {
    name
    price
    stock
    photo
    description
  }
}
  `;

export const UPDATE_INVENTORY = gql`
mutation Stock($name: String, $stock: Int) {
  stock(name: $name, stock: $stock) {
    name
    price
    stock
    photo
    description
  }
}
 `;