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
import { loader as  checkoutLoader } from './pages/Checkout'
import { loader as  ordersLoader } from './pages/Orders'
//actions
import { action as  registerAction } from './pages/Register'
import { action as  loginAction } from './pages/Login'
import { action as  checkoutAction } from './components/CheckOutForm'

import { store } from './store'

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
          loader:ordersLoader(store),

        },
        {
          path: 'checkout',
          element: <Checkout />,
          loader:checkoutLoader(store),
          action:checkoutAction(store),

        },


      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
      action:loginAction(store),
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
      action:registerAction,
    }

  ]
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
