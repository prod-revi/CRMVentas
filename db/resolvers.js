// Resolvers
const resolvers = {
  Query: {
    obtenerCursos: (_, {}, ctx, info) => {
      return "algo";
    }
  }
}

module.exports = resolvers;