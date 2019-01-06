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
//$name, $genre and $authorId are comming where addBookMutation is called and what is inside the variables object
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) { 
            name
            id
        }
    }
`;
//String! - or ! means non empty in this case String

export { getAuthorsQuery, getBooksQuery, addBookMutation };
