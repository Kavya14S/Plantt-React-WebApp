import React from "react";
import ReactDOM from "react-dom/client";
//import { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Shop from "./component/Shop/Shop";
import Servicecard from "./component/servicecard/Servicecard";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import FAQ from "./component/FAQ/FAQ";
import Contact from "./component/Contact/Contact";
import Shopdetails from "./component/Shopdetails/Shopdetails";

//import Productcard from "./component/Productcard/Productcard";

const AppLayout = () => {
  return (
    <>
      
      <Header />
      <Outlet/>
      <Servicecard />
      <Footer />

    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/shopdetails",
        element: <Shopdetails />
      },
      
    ]
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
