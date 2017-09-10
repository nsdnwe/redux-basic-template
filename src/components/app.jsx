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
  constructor(props) {
    super(props)
    this.state = { id: 0, name: "", author: "", description: "" }
  }
  
  componentWillMount() {
    this.props.dispatch(fetchBooks())
  }

  addBook() {
    this.props.dispatch(addBook({ id: Date.now(), name: this.state.name, author: "Author-1", description: "Desc-1" }))
  }

  render() {
    const mappedBooks = this.props.books.bookList.map(z => <Book key={z.id} name={z.name} id={z.id} />)
    const {name, author, description} = this.state
    var controlStyle = {marginBottom: '5px'}
    return (
      <div>
        {this.props.books.fetched ? <div></div> : <p>Fetching books from Azure WebApi...</p>}
        {mappedBooks}
        <div>
          <input autoFocus placeholder="New book name" className="form-control" style={controlStyle} defaultValue={name} onChange={(me) => this.setState({name: me.target.value})}></input>
          <button onClick={this.addBook.bind(this)}>Add New</button>
        </div>
      </div>
    )
  }
}