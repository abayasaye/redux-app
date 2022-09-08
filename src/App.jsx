import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/pages/home/home'
import MyForm from './components/pages/MyForm/MyForm'

function App() {
  return (
    <div className="App">
      <Home/>
      <MyForm/>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
  )
}

export default App
