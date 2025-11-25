import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ComponentsContext/App.jsx'
// import App from './ComponentsContext/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
