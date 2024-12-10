// qui andremo a scrivere la nostra funzione Reducer
// la funzione reducer serve a calcolare il nuovo stato dell'app ogni volta che una action viene "dispatchata"
// il reducer è in grado di calcolare il nuovo stato grazie ai due parametri con i quali viene invocato: lo stato attuale dell'app ("state") e la più recente action "dispatchata" (action)

import { SET_USERNAME } from '../actions'

// l'unica cosa che ci manca a questo punto è lo STATO INIZIALE di Redux
// al momento ci interessa salvare il contenuto del carrello dei libri!

const initialState = {
  name: '',
}
// immaginiamo di avere uno stato complesso

// alla prima invocazione di mainReducer (che avviene al caricamento della pagina) state è undefined (non esiste ancora!); diamo come valore di default del parametro state il nostro oggetto "initialState"
const userReducer = (state = initialState, action) => {
  // mainReducer calcolerà lo stato nuovo
  // quindi ritornerà SEMPRE un oggetto, il nuovo stato dell'app

  // mainReducer è una PURE FUNCTION, non può modificare i propri parametri e non può eseguire "side-effects" (ad es. contattare delle API)

  switch (action.type) {
    // qui inseriamo tutte le possibili casistiche
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload,
      }

    default:
      // finiamo qui dentro se l'action.type non corrisponde a nessuno dei case stabiliti precedentemente
      return state
    // nel peggiore dei casi ritorniamo lo stato esattamente come l'abbiamo trovato
  }
}

export default userReducer
