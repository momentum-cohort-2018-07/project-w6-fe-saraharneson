import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'

class BookEdit extends Component {
  constructor (props) {
    super()
    this.state = {
      title: this.props.book.title,
      author: this.props.book.author,
      url: this.props.book.url,
      shortDescription: this.props.book.shortDescription,
      coverImageUrl: this.props.book.coverImageUrl,
      publisher: this.props.book.publisher,
      publicationDate: this.props.book.publicationDate,
      detailedDescription: this.props.book.detailedDescription
    }
  }

  // +++ TO DO: function for handleChange, when event happens, change the state

  // +++ TO DO: function for handleSubmit, on submit, create object, pass to DB

  // >>> editBookEntry (book) {
  //   request.put('http://localhost:4000/books')
  // }

  // +++ TO DO: make object with expected keys as API lists them, started below

  render () {
    // let { book } = this.props
    return (
      <form>
        <input type='text' className='input editField' value={this.state.title}>{this.state.title}</input>
      </form>
    )
  }
}

export default BookEdit
