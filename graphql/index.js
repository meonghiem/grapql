const { makeExecutableSchema } = require('@graphql-tools/schema')
const userTypeDefs = require("./typeDefs/user")
const productTypeDefs = require("./typeDefs/product")

const Query = `
type Query{
    user: User,
    product: Product
}
`

const resolvers = {
    Query: {
        user: () => { },
        product: () => { },
    },
};

module.exports = makeExecutableSchema({
    typeDefs: [Query, userTypeDefs, productTypeDefs],
    resolvers: resolvers
})


