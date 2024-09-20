import React, { useState } from 'react'
import './Product.css';
import HomeProduct from '../../data/Home_product';
const Product = () => {
  let [homedata,sethomedata]=useState(HomeProduct)
let dete=(itemDelet)=>{
 let DeleteItem = homedata.filter((item)=>item !== itemDelet);
  sethomedata(DeleteItem)

}
  return (
    <div className='product '>
    <div className='container py-5'>
      <table className='w-full '>
        <tr>
          
          <th scope='col'>id</th>
          <th scope='col'>name</th>
          <th scope='col'>price</th>
          <th scope='col'>image</th>
          <th scope='col'>type</th>
          <th>delete</th>
        </tr>
        {
          homedata.map(( e,i)=>{
            return(
              <tr id={`tr-${i}`}>
                <td>{e.id}</td>
                <td>{e.Name}</td>
                <td>{e.price}</td>
                <td><img style={{width:'150px'}} className='block mx-auto' src={e.img} alt='image'/></td>
                <td>{e.type}</td>
                <td><input className='bg-orange-600 rounded-md text-lg text-white w-full py-2' type='submit' onClick={()=>dete(e)}  value='delete'/></td>
              </tr>
            )
          })
        }
        
      </table>

    </div>{/**container */}
    {/**product */}
   </div>
  )
}

export default Product

