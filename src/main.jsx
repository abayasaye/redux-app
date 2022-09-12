// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createStore,compose} from 'redux'
import {Provider} from 'react-redux'
import userReducer from './store/reducers/user-reducer'
import c ombine from ''

const enhancers = compose(
  window._REDUX_DEVTOOLS_EXTENSTION_&&
  window._REDUX_DEVTOOLS_EXTENSTION_()
);

const usersStore = createStore(userReducer,{users:[ {fName:"abay",lName:"asaye",age:26,email:"abay3292@gmd.com"} ] },enhancers)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersStore}>
    <h1></h1>
    <App />
  </Provider>
)
