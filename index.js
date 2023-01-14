import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGql.js";

import mongoose from "mongoose";
import "./models/userModel.js"
import "./models/taskModel.js"
import { MONGO_URI } from "./config.js";

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))
import resolvers from "./resolvers.js";
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
});

