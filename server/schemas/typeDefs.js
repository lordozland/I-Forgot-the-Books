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

  type Query {
    user: [School]
    classes: [Class]
    professors: [Professor]
    class(id: ID!): Class
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
