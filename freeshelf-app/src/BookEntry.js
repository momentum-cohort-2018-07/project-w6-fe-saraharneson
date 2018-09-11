import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import books from './books.json'
import BookEdit from './BookEdit.js'

class BookEntry extends Component {
  constructor (props) {
    super()
    this.state = {
      books: books,
      isExpanded: false,
      editingBook: false,
      bookToEditById: ''
      // bookToEditById part was suggested by Liz, but I think I've got too many things going on.
    }

    this.handleClick = this.handleClick.bind(this)
    this.editingBook = this.editingBook.bind(this)
  }

  handleClick () {
    this.setState(state => ({
      isExpanded: !state.isExpanded
    }))
  }

editingBook(event, BookEntry) {
  bookToEdit = event.target.value
  this.setState(state => ({
    editingBook: true,
    bookToEditById: bookToEdit
  }))
}
// above is similar to:
    // const student = this.state.students.find(student => student.id === this.state.currentStudent)

  render () {
    if (this.state.editingBook) {
      return (
        <BookEdit { bookToEdit } />
        // check ^^^ syntax, still have parsing error ... I think this has gotten too confused; need to consult with Clinton.
        
        //  +++ TO DO: pass props to BookEdit component
      )
    } else {
      return (
        <div className='singleBook columns'>
          <div className='column bookImage'> <img src={this.props.coverImageUrl} alt='book' onError={i => { i.target.style.display = 'none' }} />
          </div>

          <div className='column is-four-fifths'>

            <h2 className='bookTitle'>{this.props.title}</h2>
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
              <button className='editBookButton' value={this.props.key} onClick={this.editingBook(this.value)}>Edit this book entry</button>
            </div>
            ) : <button className='expandInfo' onClick={this.handleClick}> &#9654; More Information</button>
            }
          </div>
        </div>
      )
    }
  }
}
export default BookEntry

// +++ TO DO: at edit button I need to send the props to the component - still figuring out how to do this.

//  +++ TO DO: make a button for book editing create form via conditional rendering
