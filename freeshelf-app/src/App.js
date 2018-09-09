import React, { Component } from 'react'
import request from 'superagent'
import 'bulma/css/bulma.css'
import './App.css'
// import books from './books.json'
import BookEntry from './BookEntry'

class App extends Component {
  constructor () {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount () {
    request.get('http://localhost:4000/books')
      .then(res => {
        this.setState({
          books: res.body
        })
      })
  }

  render () {
    return (
      <div className='App'>
        <div className='app-header'>
          <h1 className='app-title'>freeshelf</h1>
          <h1 className='app-subtitle'>treat yo'self!</h1>

        </div>
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
