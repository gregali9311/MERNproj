const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    SavedBooks: [SavedBooks]!
  }

  type SavedBooks {
    _id: ID
    authors: String
    description: String
    bookID: String
    image: String
    link: String
    title: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [SavedBooks]
    booksid(thoughtId: ID!): SavedBooks
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
