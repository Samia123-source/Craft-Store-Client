import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import CraftList from '../Pages/CraftList'

const Root = () => {
  
  return (
    <div className='font-poiretOne m-0 p-0 bg-white'>
  
        <Navbar></Navbar>
        <Outlet></Outlet>
                   
        <Footer></Footer>
    </div>
  )
}

export default Root