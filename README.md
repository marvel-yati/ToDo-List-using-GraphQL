# ToDo-List-using-GraphQL

A simple ToDo list using Apollo Server as the GraphQL server, JavaScript as the programming language, and Node.js as runtime. A simple example to show the potential of GraphQL.

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Source: GraphQL Website

In a very resumed way, this means we need to focus and describe the data we are interested in when making requests to the server.

Apollo Server is a library that allows us to receive the GraphQL requests using HTTP and makes the bridge between the GraphQL schema and the Node.js application that we will build using JavaScript.

The ToDo list will have the following features: read list, create, update and delete an item.

To implement the features above we will use two GraphQL concepts, mutation and query. For operations that modify data (create, update and delete) we will use mutation and for querying data (read) we will use query.

Let’s start with the project setup.

Project Setup
To start we need to create the Node.js project and install some of the packages that will help us build the ToDo list.

📝 If you don’t have Node.js already installed you can download it from the official website and install it.

Choose a directory for your project and run the following command to set up the package.json file.

npm init
We will need the following set of libraries:

javascript — the programming language
graphql — to provide the GraphQL concepts
graphql-codegen/cli — to generate TypeScript types based on the GraphQL schema

To install the libraries run the command below.

npm install graphql @graphql-codegen/cli uuid
Now that we have finished the project setup let's start creating the GraphQL schema.

GraphQL Schema 
Let’s create the schema that represents the ToDo list. For this, we will only need five types, a User and Tasks to represent the tasks and and a Query and Mutation to interact with the users and the tasks.

Query and Mutation Resolvers

In this section, we will create the query and mutation resolvers to interact with the ToDo list data.

Query and mutation resolvers we need to manipulate the list.
The first argument of each resolver is the return value of the parent resolver (resolvers are chainable). A second argument is an object that contains all GraphQL arguments passed to each mutation.

GraphQL and Node.js Server Setup
Now that we have the GraphQL schema, the respective TypeScript types, and the resolvers, we can start building the Node.js server that will host the solution.

First, we need to install the following packages:

express — a web framework for Node.js
apollo-server-express — integration of the GraphQL server with the express framework
npm install express apollo-server-express --save
After the packages are installed we need to read the schema from the file we have created before and load it into the ApolloServer. When the server is created we need to add express as the middleware to handle the different queries and mutations.

With the server code ready, we will now be able to run npm start and see the GraphQL playground by accessing http://localhost:4000/
And we are done, by now you should have a fully functional GraphQL service that implements the basic ToDo list operations.
