import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Users from '../User/Users';
import Product from '../Product/Product';


const RouterDash = () => {
  return (
    <>
     
    <Routes> 
           
        <Route path='/product' element={<Product/>}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
    </>
  )
}

export default RouterDash