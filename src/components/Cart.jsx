import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Cart = () => {
  const navigate = useNavigate()

  // hooks di react-redux

  // cardArray sarà l'array di libri nel carrello in Redux
  const cartArray = useSelector((reduxState) => {
    return reduxState.cart.content
  })

  const username = useSelector((reduxState) => {
    return reduxState.user.name
  })

  const booksInStock = useSelector((reduxState) => {
    return reduxState.book.inStock
  })

  // otteniamo la funzione di dispatch
  const dispatch = useDispatch()

  // rimandiamo l'utente in homepage se non ha uno username
  useEffect(() => {
    if (username === '') {
      navigate('/')
    }
  }, [])

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cartArray.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromCartAction(i))
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{' '}
          {cartArray.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          Nel negozio sono disponibili {booksInStock.length} libri!
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
