import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from '../src/store.js'
import { Provider } from 'react-redux'
import './index.css';
import  { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>,
)
