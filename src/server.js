import { GraphQLServer } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
  },
  context: {
    db,
  },
});

server.start(() => {
  console.log("The Server is Up");
});
