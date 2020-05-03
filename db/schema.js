const { gql } = require('apollo-server');

// Schema
const typeDefs = gql`

  type Query {
    obtenerCursos: String
  }
`;

module.exports = typeDefs;