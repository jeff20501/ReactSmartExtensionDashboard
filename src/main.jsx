import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './BrowserExtensions/Page.css'
import { Page } from './BrowserExtensions/Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
