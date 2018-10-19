import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index.js';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book) => (
            <li key={book.title} className="list-group-item" onClick ={() => this.props.selectBook(book)}>
                {book.title}
            </li>
        )
        );
    }

    render(){
        return (
            <ul className="col-md-4 list-group">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}

export default connect(mapStateToProps, {selectBook})(BookList);
