import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
import bookReducer from '../reducers/bookReducer'
// poichè il file dentro la cartella reducers si chiama "index.js" non è necessario specificarlo alla riga 2

// ricreo il mainReducer
const mainReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
})

const myReduxStore = configureStore({
  reducer: mainReducer, // ricostruito tramite le fette
})

export default myReduxStore
