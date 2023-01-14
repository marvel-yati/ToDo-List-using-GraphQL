import { gql } from "apollo-server";

const typeDefs = gql`
    type Query{
        tasks: [Task]
        task(_id:ID!):Task
        users:[User]
        user(_id:ID!):User
        quotes: [Quote]
    }
    type Task{
        _id:ID
        name:String
        status:String
    }
    type User{
        _id: ID
        firstName: String,
        lastName: String,
        email: String
        password: String
        tasks:[Task]
    }
    type Quote{
        name:String,
        by: String
    }
    type Mutation{
        signupUserDummy(UserNew : UserInput!):User
    }
    input UserInput{
        firstName:String!
        lastName:String!
        email:String!
        password:String!
    }
`

export default typeDefs