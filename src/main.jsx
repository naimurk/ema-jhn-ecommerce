import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop';
import Home from './components/Home';
import Oder from './components/Oder';
import Inventroy from './components/Inventroy';
import Login from './components/Login';
import cartsProductLoader from './loader';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
        path : "/",
        element : <Shop></Shop>
      },
      {
        path : 'orders',
        element: <Oder></Oder>,
        loader : cartsProductLoader
        
      },
      {
        path :  "inventory",
        element: <Inventroy></Inventroy>
      },
      {
        path : 'login',
        element : <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
