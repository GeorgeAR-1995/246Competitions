import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'; // This may be required in some setups
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
