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
    }
  }`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
  }
}
`