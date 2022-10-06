import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import App from './App'
import Themeprovider from './Context/Themeprovider'
import './index.css'
import Login from './Login'

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/login", element:<Login/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Themeprovider>
       <RouterProvider router={router} />
   </Themeprovider>
  </React.StrictMode>
)
