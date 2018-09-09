import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import books from './books.json'

class BookEntry extends Component {
  constructor (props) {
    super()
    this.state = {
      books: books,
      isExpanded: false
      // picOK: false
    }
    this.handleClick = this.handleClick.bind(this)
    // this.onError = this.onError.bind(this)
  }

  handleClick () {
    this.setState(state => ({
      isExpanded: !state.isExpanded
    }))
  }

  // i => { i.target.style.display = 'none' }

  render () {
    return (<div className='singleBook'>
      <div className='bookImage'> <img src={this.props.coverImageUrl} alt='book' onError={i => { i.target.style.display = 'none' }} />
      </div>
      <div className='bookTitle'>
        <h2>{this.props.title}</h2>
      </div>
      <h3 className='bookAuthor'> {this.props.author}</h3>
      <p className='bookShort'> {this.props.shortDescription}</p>
      {this.state.isExpanded ? (<div className='bookMoreInfo'>
        <button className='expandInfo' onClick={this.handleClick}>&#9660; Less Information</button>
        <div className='bookUrl'>
          <p><span className='category'> URL: </span><a href='{this.props.url}'>{this.props.title}</a></p>
        </div>
        <div className='bookPublisher'>
          <p><span className='category'>Publisher: </span>{this.props.publisher}</p >
        </div>
        <div className='bookDate' >
          <p><span className='category'>Publication date: </span>{this.props.publicationDate}</p>
        </div>
        <div className='bookBlurb'>
          <p><span className='category'>Full description: </span>{this.props.detailedDescription}</p>
        </div>
      </div>
      ) : <button className='expandInfo' onClick={this.handleClick}> &#9654; More Information</button>
      }
    </div>
    )
  }
}
export default BookEntry
