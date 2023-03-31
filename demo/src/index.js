import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute components={Welcome}/>,
  },
  {
    path: "dashboard",
    element: <PrivateRoute components={Dashboard}/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
