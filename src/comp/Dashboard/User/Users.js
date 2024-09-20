import React from 'react'
import './User.css';
import data_User from '../../data/Data_user';
const Users = () => {
  return (
  <>
 <div className='right'>
  <h3 className='pt-5 '>user</h3>
  <div className='container py-5'>
    <div className='grid grid-cols-12'>
    {data_User.map((e)=>{
      return(
        <div className='col-span-4 gap-2 text-center p-2 bg-white m-2'>
          <img className='block mx-auto p-2' style={{width:'150px'}} src={e.image} alt='image'/>
          <h4>name: {e.name}</h4>
          <p>email:{e.email}</p>
          {/**row */}
        </div>
      )
    })}
    </div>{/**row */}
  </div>{/**container */}
 </div>{/**right */}

  </>
  )
}

export default Users