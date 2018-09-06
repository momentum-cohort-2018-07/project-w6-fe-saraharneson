import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import books from './books.json'

class BookEntry extends Component {
  constructor (props) {
    super()
    this.state = {
      books: books
      // collapsed: true
    }
  }

  render () {
    return (
      <div className='singleBook'>
        <div className='bookTitle'>
          <h2>{this.props.title}</h2>
        </div>
        <div className='bookImage'><img src={this.props.coverImageUrl} alt='book' />
        </div>
        <h3 className='bookAuthor'>{this.props.author}</h3>
        <p className='bookShort'>{this.props.shortDescription}</p>
        <div classsName='bookMoreInfo'>
          <div className='bookUrl'><span className='category'>URL:</span>
            <p>{this.props.url}</p>
          </div>
          <div className='bookPublisher'><span className='category'>Publisher:</span>
            <p>{this.props.publisher}</p>
          </div>
          <div className='bookDate'><span className='category'>Publication date:</span>
            <p>{this.props.publicationDate}</p>
          </div>
          <div className='bookBlur'><span className='category'>Full description:</span>
            <p>{this.props.fullDescription}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default BookEntry
