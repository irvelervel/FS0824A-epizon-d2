import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// impariamo a LEGGERE dallo stato di Redux
import { useSelector } from 'react-redux'

const CartIndicator = () => {
  const navigate = useNavigate()

  const cartArray = useSelector((reduxState) => {
    // reduxState è l'intero oggetto di stato contenuto in Redux
    // dovete ritornare la porzione che vi interessa
    return reduxState.cart.content // []
  })

  return (
    <div className="d-flex justify-content-end my-4">
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
    </div>
  )
}

export default CartIndicator
