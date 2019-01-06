import { gql } from "apollo-boost"; // gql is the tool that helping us to construct the query, since GraphQL is not a javascript, but rather diff language

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
    mutation {
        addBook(name: "", genre: "", authorId: "") {
            name
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
