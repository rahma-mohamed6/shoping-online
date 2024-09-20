
import React ,{useState} from "react";
import Nav from "./comp/Nav/nav";

import {  HashRouter } from "react-router-dom";
import Routerjs from "./comp/Routerjs";
import HomeProduct from "./comp/data/Home_product";
export default function App(){
  let [cart,setcart]=useState([])
  let [search,setsearch]=useState(HomeProduct);
  let [shop ,setshop]=useState(HomeProduct);
  let Filter =(x) =>{
    let catefilter=HomeProduct.filter((product)=>{
      return product.cart === x
    })
    setshop(catefilter)
  }
  let all =()=>{
    setshop(HomeProduct)
  }
  
  let serachlength =(search || []).length === 0
  let serachproduct =()=> 
    {
  if(serachlength)
    {
    alert('please search something !')
    setshop(HomeProduct)
  }
  else{
      let searchfilter=HomeProduct.filter((x)=>{
        return x.cart===search
      })
      setshop(searchfilter)
  }
}
 
 let addlocart = (product)=>{
  let exit= cart.find((x)=>{
    return x.id === product.id
  })
  if(exit){
    alert('this product is alleardy added in cart')
  }
  else{
    setcart([...cart,{...product,qty:1}]);
    alert('added to cart')
  }
 }

  return (
    <>
    <HashRouter>
    <Nav search={search} setsearch={setsearch} serachproduct={serachproduct}/>
    <Routerjs setcart={setcart} cart={cart} shop={shop} Filter={Filter} all={all} addlocart={addlocart}/>
    </HashRouter>
    </>
  )
}