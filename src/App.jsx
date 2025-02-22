import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { About, Products, Orders, Login, Register, HomeLayout, Landing, SingleProduct, Cart, Checkout, Error } from './pages'

import { ErrorElement } from './components'
//loaders
import { loader as landingLoader} from './pages/Landing'
import { loader as singlePageLoader } from './pages/SingleProduct'
import { loader as  productsLoader } from './pages/Products'

//actions

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement:<ErrorElement/>,
          loader:landingLoader,
        },
        {
          path: 'about',
          element: <About />,


        },
        {
          path: 'products',
          element: <Products />,
          errorElement:<ErrorElement/>,
          loader:productsLoader,
    

        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          errorElement:<ErrorElement/>,
          loader: singlePageLoader,
        
        },
        {
          path: 'cart',
          element: <Cart />,
         

        },
        {
          path: 'orders',
          element: <Orders />,

        },
        {
          path: 'checkout',
          element: <Checkout />,

        },


      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    }

  ]
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
