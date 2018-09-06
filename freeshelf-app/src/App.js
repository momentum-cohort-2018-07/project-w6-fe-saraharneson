import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import books from './books.json'
import BookEntry from './BookEntry'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: books
    }
  }

  render () {
    return (
      <div className='App'>
        {this.state.books.map((book, idx) =>
          <BookEntry
            key={idx}
            title={book.title}
            author={book.author}
            url={book.url}
            shortDescription={book.shortDescription}
            coverImageUrl={book.coverImageUrl}
            publisher={book.publisher}
            publicationDate={book.publicationDate}
            detailedDescription={book.detailedDescription} />
        )}
      </div>
    )
  }
}

export default App
