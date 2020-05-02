const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

// Server 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const usuarioId = 20;
    return {usuarioId};
  }
});

// Run Server
server.listen().then( ({url}) => {
  console.log(`Server running in URL ${url}`);  
})
