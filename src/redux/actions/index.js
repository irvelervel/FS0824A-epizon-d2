// dichiaro ed esporto gli action.type/reducers case
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

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

export const setUsernameAction = (username) => {
  return {
    type: SET_USERNAME,
    payload: username, // passo il valore dallo stato locale di CartIndicator, dove sto memorizzando il contenuto dell'input, e lo utilizzo come payload per questa action, in modo che il reducer possa salvarlo in reduxState.user.name
  }
}
