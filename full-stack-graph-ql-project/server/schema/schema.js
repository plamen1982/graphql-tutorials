const graphql = require('qraphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
const books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } }, // book(id: '1') when we call our qeury - id is coming from the args.
            resolve(parent, args) {
                //code to get data from db / other source
                // return books.find((book) => args.id === book.id)
                return _.find(books, { id: args.id })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})