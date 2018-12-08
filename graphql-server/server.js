import express from 'express';
const app = express();

import graphqlHTTP from 'express-graphql'
import { GraphQLSchema, GraphQLObjectType, GraphQLString,
    GraphQLNonNull, GraphQLID } from 'graphql'

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'The root query',
    fields: {
        viewer: {
            type: GraphQLString,
            resolve() {
                return 'viewer!';
            }
        }
    },
});

const Schema = new GraphQLSchema({
    query: RootQuery,
});

let inMemoryUse = {};

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'The root mutation',
    fields: {
        setNode: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                },
                value: {
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve(source, args) {
                inMemoryUse[args.key] = args.value;
                return inMemoryUse[args.key];
            }
        }
    }
});


app.use("/graphql", graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(3000, () => {
  console.log({ running: true });
});
