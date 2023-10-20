const express = require("express")
const { ApolloServer } = require("@apollo/server")
const { expressMiddleware } = require("@apollo/server/express4")
const schemaGraphql = require("./graphql")
const app = express()
const port = 4000
const bootstrapServer = async () => {
    const server = new ApolloServer(schemaGraphql)
    await server.start()

    app.use("/graphql", expressMiddleware(server))
    app.get("/", (req, res) => {
        res.send("Hello world")
    })

    app.listen(port, () => {
        app.listen(port, () => {
            console.log(`🚀 Express ready at http://localhost:${port}`);
            console.log(`🚀 Graphql ready at http://localhost:${port}/graphql `);
        });
    })
}

bootstrapServer()