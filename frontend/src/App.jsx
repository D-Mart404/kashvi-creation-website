import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Aboutpage from './pages/Aboutpage'
import Home from './pages/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Loginmain from './pages/Loginmain'
import ShoppingCartpage from './pages/ShoppingCartpage'
import Profilepage from './pages/Profilepage'
import Categorymain from './pages/Categorymain'
import Collectionmain from './pages/Collectionmain'
import NewArrivalspage from './pages/NewArrivalspage'
import ContactUspage from './pages/ContactUspage'
import Blogpage from './pages/Blogpage'
import BestSellerpage from './pages/BestSellerpage'
import OffersDiscountspage from './pages/OffersDiscountspage'
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Loginmain></Loginmain>
    },
    {
      path:"/cart",
      element:<ShoppingCartpage></ShoppingCartpage>
    },
    {
      path:"/about",
      element:<Aboutpage></Aboutpage>
    },
    {
      path:"/profile",
      element:<Profilepage></Profilepage>
    },
    {
      path:"/category/:name",
      element:<Categorymain></Categorymain>
    },
    {
      path:"/collections/:name",
      element:<Collectionmain></Collectionmain>
    },
    {
      path:"/new-arrivals",
      element:<NewArrivalspage></NewArrivalspage>
    },
    {
      path:"/contact",
      element:<ContactUspage></ContactUspage>
    },
    {
      path:"/blog",
      element:<Blogpage></Blogpage>
    },
    {
      path:"/best-sellers",
      element:<BestSellerpage></BestSellerpage>
    },
    {
      path:"/offers",
      element:<OffersDiscountspage></OffersDiscountspage>
    }
  ])
  

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App