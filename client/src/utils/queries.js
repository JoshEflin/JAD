import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query users($username: String!) {
    users(username: $username) {
        _id
        username
        email
    }
}
`;

export const Query_DATA = gql`
query getData($query: String!) {
    getData(query: $query){
        __typename  
    }
}`