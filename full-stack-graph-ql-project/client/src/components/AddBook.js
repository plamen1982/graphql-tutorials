import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // graphql is the tool that helping us to bind the data from the query with the component
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: '',
        }
    }
    renderAuthors() {
        const { data: { authors } } = this.props;
        const { data: { loading } } = this.props;
        if(loading) {
            return <option>Loading Authors...</option>
        }

        return (
            authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>
            })
        );
        
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

  render() {

    return (
        <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={ e => this.setState({ name: e.target.value })}/>
        </div>
        <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={ e => this.setState({ genre: e.target.value })}/>
        </div>
        <div className="field">
            <label>Author:</label>
            <select onChange={ e => this.setState({ authorId: e.target.value })}>
                <option>Select author</option>
                {this.renderAuthors()}
            </select>
        </div>
        <button>+</button>

    </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook); //when component renders the data is requested with the query and the binding with the 
                                                //component and the information from the query is stored in the this.props

//1. constructing the query
//2. binding the query result with the component