import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createStore,compose} from 'redux'
import {Provider} from 'react-redux'
import userReducer from './store/reducers'

const enhancers = compose(
  window._REDUX_DEVTOOLS_EXTENSTION_&&
  window._REDUX_DEVTOOLS_EXTENSTION_()
);

const usersStore = createStore(userReducer,{user:[]},enhancers)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersStore}>
    <App />
  </Provider>
)
