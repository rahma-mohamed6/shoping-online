import React from "react";
import HomeProduct from "../data/Home_product";
import './Home.css';
import './MadieHome.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Trending({addlocart}){
    let [homeproduct,sethomeproduct]=useState(HomeProduct);
    let [showdetail,setshowdetail]=useState(false);
  let [detail,setdetail]=useState([])
  let closedetail=()=>{
    setshowdetail(false)
  }
  let detailpage=(product)=>{
    let detaildata=([{product}]);
    let productdata=detaildata[0]['product']
    setdetail(productdata)
    setshowdetail(true);
  }
    let filtercate =(x)=>{
        let filterproduct = HomeProduct.filter((card)=>{
            return  card.type === x
            
        })
        sethomeproduct(filterproduct)
    }
    let allproduct = ()=>{
        sethomeproduct(HomeProduct)
    }
    return(
        <div className="trending w-full py-5 px-5">
            {
        showdetail ?
        <>
        <div className="product-detail p-3 bg-white shadow-md rounded-md fixed top-8 mx-auto z-10">
          <button className=" cursor-pointer right-2 absolute bg-orange-400 p-1 text-white rounded" onClick={closedetail}><FontAwesomeIcon icon={faClose}/></button>
          <div className="container grid">

            <div className="imgbox w-full relative overflow-hidde0n text-center">
              <img className="h-full   absolute  " src={detail.img} alt=''/>
            </div>{/**imgbox */}

            <div className="info text-center py-3">
              <h4 className="uppercase tracking-wider text-orange-500">name : {detail.Name}</h4>
              <p className="text-xl mt-3">price : {detail.price} $</p>
              <p className="text-slate-400 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus ut laudantium exercitationem provident!',
              </p>
              <div className="icon py-2">
                <FontAwesomeIcon className="px-1 text-yellow-500 " icon={faStar}/>
                <FontAwesomeIcon className="px-1 text-yellow-500 " icon={faStar}/>
                <FontAwesomeIcon className="px-1 text-yellow-500 " icon={faStar}/>
                <FontAwesomeIcon className="px-1 text-yellow-500 " icon={faStar}/>
                <FontAwesomeIcon className="px-1 text-yellow-500 " icon={faStar}/>
              </div>
              <button onClick={()=> addlocart(detail)} className="capitalize bg-orange-500 rounded-lg text-lx text-white py-2 px-5">add cart</button>
            </div>{/**info */}

          </div>{/**container */}
          {/**product */}
        </div>
        </>
        : null


      }
        <div className="container max-w-full flex">
          <div className="left-box py-2.5  ">
            <div className="header h-10 items-center flex max-w-full bg-slate-300 px-2 justify-between">
              <div className="heading">
                <h2 className="uppercase text-sm cursor-pointer" onClick={()=> allproduct()} >trending product</h2>
              </div> 
              {/**heading */}
              <div className="cate flex mt-1">
                <h3 onClick={()=>filtercate('new')} className=" text-sm cursor-pointer duration-1000 hover:text-orange-600 mr-5">
                  new
                </h3>
                <h3 onClick={()=>filtercate('featured')} className=" text-sm cursor-pointer duration-1000 hover:text-orange-600 mr-5">
                  featured
                </h3>
                <h3 onClick={()=>filtercate('top')} className=" text-sm cursor-pointer duration-1000 hover:text-orange-600 mr-5">
                  top selling
                </h3>
              </div>
              {/**cate */}
            </div>
            {/**header */}
            <div className="products max-w-full">
              <div className="container grid grid-cols-3 gap-2.5">
                {homeproduct.map((card) => {
                  return (
                    <div>
                      <div className="box shadow-xl p-1 text-center relative overflow-hidden">
                        <div className="img-box">
                          <img className="mx-auto" src={card.img} alt="image" />
                        </div>
                        {/**img-box */}
                        <div className="icon flex flex-col absolute duration-1000">
                          <FontAwesomeIcon
                            className="icons my-2.5 bg-white shadow-xl  hover:text-orange-600"
                            icon={faHeart}
                          />
                          <FontAwesomeIcon
                            className="icons my-2.5  bg-white shadow-xl hover:text-orange-600"
                            icon={faEye} onClick={()=>detailpage(card)} 
                          />
                        </div>
                        {/**icon */}
                        <div className="text">
                          <h2 className="text-xl uppercase text-orange-600 my-2">{card.Name}</h2>
                          <p className="text-slate-500 mb-2">price:{card.price}$</p>
                         
                          <button className="block mx-auto my-2 bg-orange-600 py-2 px-5 rounded-md text-white hover:bg-orange-800" onClick={()=> addlocart(card)}>add Cart</button>
                        </div>{/**test */}
                      </div>{/**box */}
                    </div>
                  );
                })}
              </div>
              {/**container */}
            </div>
            {/**products */}
          </div>
          {/**left-box */}
        </div>
        {/**container */}
        {/**trending */}
      </div>

    )
}