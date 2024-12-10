import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import myReduxStore, { myPersistStore } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

// il Redux Store è pronto! ma per renderlo attivo nella nostra create-react-app dobbiamo iniettarlo dentro il componente principale dell'albero! ovvero <App />
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // forniamo a Provider il nostro Store con una proprietà chiamata "store"
  <Provider store={myReduxStore}>
    {/* inseriamo un layer aggiuntivo per il mantenimento in memoria
    del Redux Store */}
    <PersistGate loading={null} persistor={myPersistStore}>
      <App />
    </PersistGate>
  </Provider>
)
