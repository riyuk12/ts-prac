import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Datalayer } from './datalayer/datalayer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Datalayer>
      <App />
    </Datalayer>
  </React.StrictMode>,
)
