// questo reducer si occuperà di mantenere la fetta "book" nel Redux Store.
// dentro la fetta "book" ci sarà un semplice oggetto contenente l'array dei libri disponibili a listino

import { GET_BOOKS, GET_BOOKS_ERROR } from '../actions'

const initialState = {
  inStock: [], // prima della fetch, l'array è vuoto!
  isError: false,
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        inStock: action.payload, // l'array proveniente dalla fetch()
      }

    case GET_BOOKS_ERROR:
      return {
        ...state,
        isError: true,
      }

    default:
      return state
  }
}

export default bookReducer
