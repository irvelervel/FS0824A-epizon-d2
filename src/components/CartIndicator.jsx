import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaExclamationTriangle, FaShoppingCart } from 'react-icons/fa'
// impariamo a LEGGERE dallo stato di Redux
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

const CartIndicator = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // salvo nello stato LOCALE il valore dell'input (perchè non serve agli altri componenti)
  const [inputValue, setInputValue] = useState('')

  const cartArray = useSelector((reduxState) => {
    // reduxState è l'intero oggetto di stato contenuto in Redux
    // dovete ritornare la porzione che vi interessa
    return reduxState.cart.content // []
  })

  const username = useSelector((reduxState) => {
    return reduxState.user.name
  })

  const getBooksError = useSelector((reduxState) => {
    return reduxState.book.isError
  })

  return (
    <div className="d-flex justify-content-end my-4 align-items-center">
      {getBooksError && <FaExclamationTriangle className="me-2" />}

      {username !== '' ? (
        <>
          <span className="me-2">Ciao, {username}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">
              {cartArray.length}
              {/* 0 */}
              {/* qui dentro non voglio più uno zero fisso! */}
              {/* voglio leggere la lunghezza di cart.content dentro Redux! */}
            </span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            // ora invio il valore dell'input a Redux
            dispatch(setUsernameAction(inputValue))
          }}
        >
          <Form.Group>
            <Form.Control
              // ...come sempre
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              type="text"
              placeholder="Fai il login"
              disabled={getBooksError}
            />
          </Form.Group>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
