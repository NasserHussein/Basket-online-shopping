import React from 'react'
import NavBar from '../NavBar/NavBar'
// import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ProductDetails from '../Products/ProductDetails'

export default function Layout() {
  return <>
  <NavBar/>
  {/* <Outlet></Outlet> */}
  <ProductDetails />
  <Footer/>
  </>
}
