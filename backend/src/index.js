// Dependencies
import { ApolloServer, makeExecutableSchema } from 'apollo-server'

// Models
import models from './models'

// Type Definitions
import typeDefs from './graphql/types'
import resolvers from './graphql/resolvers'

// Schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// Apollo Server
const apolloServer = new ApolloServer({
    schema,
    context: {
        models
    }
})

// Running Apollo Server
const alter = true
const force = false
models.sequelize.sync({ alter, force}).then(() => {
    apolloServer.listen(5000).then(({url}) => console.log(`Running on ${url}`))
})
