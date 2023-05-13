import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
)
