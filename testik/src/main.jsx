import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Page12 } from './pages/page1/pages1-6/go.jsx';
import './index.css'
import {App} from './App.jsx'
import  {Victory}  from './pages/page1/pageVc.jsx';
import { Asm } from './pages/page1/pages1-6/asm.jsx';
import { JavaScript } from './pages/page1/pages1-6/javascript.jsx';
import { Php } from './pages/page1/pages1-6/php.jsx';
import { Python } from './pages/page1/pages1-6/python.jsx';
import { Rust } from './pages/page1/pages1-6/rust.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
  path: "/lessons1",
  element: <Victory/>},
  {
    path: "/go",
    element: <Page12/>},
    {
      path: "/asm",
      element: <Asm/>},
      {
        path: "/javascript",
        element: <JavaScript/>},
        {
          path: "/php",
          element: <Php/>},
          {
            path: "/python",
            element: <Python/>},
            {
              path: "/rust",
              element: <Rust/>},
                               
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
