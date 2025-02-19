import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SareeProvider } from './Sarrecontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SareeProvider>
    <App />
    </SareeProvider>
  </StrictMode>,
)
