const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: String!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type enterBukz {
    authors: String!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    enterBooks(book: enterBukz): User
    removeComment(book: ID!): User
  }
`;

module.exports = typeDefs;
