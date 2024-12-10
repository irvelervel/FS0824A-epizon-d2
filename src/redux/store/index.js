import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'
// poichè il file dentro la cartella reducers si chiama "index.js" non è necessario specificarlo alla riga 2

const myReduxStore = configureStore({
  reducer: mainReducer,
})

export default myReduxStore
