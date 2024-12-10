// dichiaro ed esporto gli action.type/reducers case
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// dichiaro ed esporto le actions, tramite degli "action creators"
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART,
    payload: bookSelected,
  }
}

// versione accorciata
// export const addToCartAction = (bookSelected) => ({
//   type: ADD_TO_CART,
//   payload: bookSelected,
// })

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i, // 0 per il primo libro, 1 per il secondo etc.
  }
}
