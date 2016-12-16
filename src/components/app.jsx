import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks, addBook } from '../actions/bookActions'
import Book from './book'

@connect((store) => {
  return {
    books: store.books, // Must be same name as in combiner
    // someOtherComponent: store.someOtherComponent
  }
})

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    this.props.dispatch(fetchBooks())
  }

  addBook() {
    this.props.dispatch(addBook({ id: Date.now(), name: "Name-1", author: "Author-1", description: "Desc-1" }))
  }

  render() {
    const mappedBooks = this.props.books.bookList.map(z => <Book key={z.id} name={z.author} />)
    return (
      <div>
        {this.props.books.fetched? <span></span> : <span>Fetching books...</span>}
        {mappedBooks}
        <div><button onClick={this.addBook.bind(this)}>Add New</button></div>
      </div>
    )
  }
}