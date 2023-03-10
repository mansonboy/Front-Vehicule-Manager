import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Leasing from './pages/Leasing';
import Services from "./pages/services";
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Articles from "./pages/Articles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/location",
        element: <Leasing />,
    },
    {
        path: "/services",
        element: <Services />
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path : "/article",
      element: <Articles />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
