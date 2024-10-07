import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/gobal.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './page/register.jsx';
import UserPage from './page/user.jsx';
import HomePage from './page/home.jsx';
import LoginPage from './page/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "user",
        element: <UserPage/>
      },
    ]
   
  },
  {
    path: "register",
    element: <RegisterPage/>
  },
  {
    path: "login",
    element: <LoginPage/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
