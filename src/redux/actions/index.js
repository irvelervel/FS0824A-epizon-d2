// dichiaro ed esporto gli action.type/reducers case
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR'

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

// fin adesso gli action creator di Redux erano delle funzioni che ritornavano delle AZIONI. È possibile però creare un'altra forma di action creator: una funzione che ritornerà ma un'altra funzione.

export const getBooksAction = () => {
  return async (dispatch, getState) => {
    // qui dentro potete fare anche operazioni asincrone (Promise)
    try {
      const resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        console.log('REDUX STORE PRIMA DELLA FETCH', getState()) // ritorna l'oggetto con cart, user e book
        // serve per fare delle verifiche sullo stato prima di dispatchare l'azione

        const fetchedBooks = await resp.json() // [{}, {}, {}, {}, {}, {}]
        // setBooks(fetchedBooks) // qui non siamo più in un componente!
        dispatch({
          // se le cose vanno bene
          type: GET_BOOKS,
          payload: fetchedBooks,
        })
        console.log('REDUX STORE DOPO LA FETCH', getState()) // ritorna l'oggetto con cart, user e book
      } else {
        throw new Error('Errore nella fetch')
      }
    } catch (error) {
      console.log(error)
      dispatch({
        // se le cose vanno male
        type: GET_BOOKS_ERROR,
        payload: error,
      })
    }

    // VERSIONE CON .then() E .catch()
    // fetch('https://striveschool-api.herokuapp.com/food-books')
    //   .then((resp) => {
    //     if (resp.ok) {
    //       console.log(getState()) // ritorna l'oggetto con cart, user e book
    //       // serve per fare delle verifiche sullo stato prima di dispatchare l'azione

    //       return resp.json() // [{}, {}, {}, {}, {}, {}]
    //       // setBooks(fetchedBooks) // qui non siamo più in un componente!
    //     } else {
    //       throw new Error('Errore nella fetch')
    //     }
    //   })
    //   .then((fetchedBooks) => {
    //     dispatch({
    //       // se le cose vanno bene
    //       type: GET_BOOKS,
    //       payload: fetchedBooks,
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     dispatch({
    //       // se le cose vanno male
    //       type: GET_BOOKS_ERROR,
    //       payload: error,
    //     })
    //   })
  }
}
