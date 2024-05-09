import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Register from './pages/Register.jsx'
import Success from './pages/Success.jsx'


const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
},{
      path: "/success",
      element: <Success />,
  },
  {
      path:"/register",
      element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
