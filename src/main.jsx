import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BiColor } from 'react-icons/bi'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<h1>Loading....</h1>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>
)

