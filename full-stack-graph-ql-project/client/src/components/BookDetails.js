import React, { Component } from "react";
import { graphql } from "react-apollo"; // graphql is the tool that helping us to bind the data from the query with the component
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

  render() {
      const { bookId } = this.props;

    return (
        <div id="book-details">
            <p>Output book details here</p>
        </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails); //when component renders the data is requested with the query and the binding with the 
                                                //component and the information from the query is stored in the this.props

//1. constructing the query - getBookQuery
//2. binding the query result with the component - graphql(getBookQuery)(BookDetails)