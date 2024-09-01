import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BlogProvider } from './store/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
    <BlogProvider><App /></BlogProvider>,
)
