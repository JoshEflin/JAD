import { gql } from "@apollo/client";

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
        inStock
      }
    }
  }
`;

// FOR CART
export const GET_ITEM = gql`
  mutation Item($foodItem: String!) {
    item(foodItem: $foodItem) {
      name
      price
      stock
      photo
      description
      inStock
    }
  }
`;
// stock needs to be set before sending back, this query will set thee stock to the stock value passed in
export const UPDATE_INVENTORY = gql`
  mutation Stock($products: [IngredientInput]) {
    stock(products: $products) {
      name
      price
      stock
      photo
      description
    }
  }
`;
