import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
    }
}
`;

export const QUERY_ITEMS = gql`
query GetItems {
    getItems {
      name
      price
      stock
      photo
      description
    }
  }`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
  }
}`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [String]!) {
    checkout(products: $products) {
      session
    }
  }
`;
