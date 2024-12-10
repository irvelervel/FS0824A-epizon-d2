import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../redux/actions'

const BookStore = () => {
  const [bookSelected, setBookSelected] = useState(null)
  const dispatch = useDispatch()

  const changeBook = (book) => setBookSelected(book)

  const bookInStock = useSelector((reduxState) => {
    return reduxState.book.inStock
  })

  useEffect(() => {
    dispatch(getBooksAction())
  }, [])

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={bookInStock} // ripasso come prop a BookList l'array del libri disponibili, in modo che possa ricreare la colonna di sx
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
