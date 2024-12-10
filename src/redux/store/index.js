import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
import bookReducer from '../reducers/bookReducer'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
// poichè il file dentro la cartella reducers si chiama "index.js" non è necessario specificarlo alla riga 2

// ricreo il mainReducer
const mainReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
})

const persistConfig = {
  key: 'root', // a che livello salvare il redux store
  storage: localStorage, // che motore "di appoggio" utilizzare
}

// creo una versione persistente del mio reducer
const persistedReducer = persistReducer(persistConfig, mainReducer)

// la creazione dello store si basa sull'utilizzo ora del reducer persistente
const myReduxStore = configureStore({
  reducer: persistedReducer, // ricostruito tramite le fette
})

// creo una versione persistente dell'intero store
export const myPersistStore = persistStore(myReduxStore)

export default myReduxStore
