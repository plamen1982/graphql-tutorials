import React, { Component } from 'react';
import { gql } from 'apollo-boost'; // gql is the tool that helping us to construct the query
import { graphql } from 'react-apollo'; // graphql is the tool that helping us to bind the data from the query with the component

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

class BookList extends Component {
    renderBooks() {
        const { data } = this.props;
        if(data.loading) {
            return <div>Loading books...</div>
        }

        return data.books.map((book) => {
            return (<li key={book.id}>{book.name}</li>)
        })
    }
  render() {
    return (
        <div>
            <ul id="book-list">
                {this.renderBooks()}
            </ul>
        </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList); //when component renders the data is requested with the query and the binding with the 
                                                //component and the information from the query is stored in the this.props

//1. constructing the query
//2. binding the query result with the component