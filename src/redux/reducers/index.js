// qui andremo a scrivere la nostra funzione Reducer
// la funzione reducer serve a calcolare il nuovo stato dell'app ogni volta che una action viene "dispatchata"
// il reducer è in grado di calcolare il nuovo stato grazie ai due parametri con i quali viene invocato: lo stato attuale dell'app ("state") e la più recente action "dispatchata" (action)

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

// l'unica cosa che ci manca a questo punto è lo STATO INIZIALE di Redux
// al momento ci interessa salvare il contenuto del carrello dei libri!

const initialState = {
  // dividiamo per ragioni organizzative lo state in SLICES (fette)
  cart: {
    content: [], // all'inizio non abbiamo libri nel carrello
    // ready: true,
  },
  // user: {
  //   blabla: true,
  // },
  // immaginiamo di avere uno stato complesso
}

// alla prima invocazione di mainReducer (che avviene al caricamento della pagina) state è undefined (non esiste ancora!); diamo come valore di default del parametro state il nostro oggetto "initialState"
const mainReducer = (state = initialState, action) => {
  // mainReducer calcolerà lo stato nuovo
  // quindi ritornerà SEMPRE un oggetto, il nuovo stato dell'app

  // mainReducer è una PURE FUNCTION, non può modificare i propri parametri e non può eseguire "side-effects" (ad es. contattare delle API)

  switch (action.type) {
    // qui inseriamo tutte le possibili casistiche
    case ADD_TO_CART:
      // qui dentro fornisco istruzioni al mio reducer su COSA FARE
      // quando intercetta una action con type "ADD_TO_CART"
      return {
        // devo SEMPRE ritornare un oggetto, il nuovo stato dell'app
        ...state,
        // andiamo a riscrivere la slice di nostro interesse
        cart: {
          ...state.cart,
          //   vado a ri-dichiarare "content" prestando attenzione a NON utilizzare metodi e tecniche che andrebbero ad alterare il valore di state, perchè in una funzione pura non si possono mutare i propri parametri
          content: state.cart.content.concat(action.payload),
          // NON POTETE USARE PUSH (perchè modifica l'array di partenza e di fatto ROMPE la funzione pura!)
          //   content: [...state.cart.content, action.payload]
        },
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => {
            if (i === action.payload) {
              return false
            } else {
              return true
            }
          }),
          // PRO VERSION
          //   content: state.cart.content.filter((_, i) => i !== action.payload),
          // METODO ALTERNATIVO CON SLICE
          //   content: [
          //     ...state.cart.content.slice(0, action.payload),
          //     ...state.cart.content.slice(action.payload + 1),
          //   ],
        },
      }

    default:
      // finiamo qui dentro se l'action.type non corrisponde a nessuno dei case stabiliti precedentemente
      return state
    // nel peggiore dei casi ritorniamo lo stato esattamente come l'abbiamo trovato
  }
}

export default mainReducer
