import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { store } from './store.js'
import { ToastContainer } from 'react-toast'
// 
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
<Provider store={store}>

        <App />
        <ToastContainer position='top-center'/>
  </Provider>
  
);
