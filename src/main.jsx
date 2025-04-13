import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../Frontend/src/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from '../Frontend/src/context/Appcontext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
  <App />
  </AppContextProvider>
  </BrowserRouter>,
)
