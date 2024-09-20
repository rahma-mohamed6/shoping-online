import React, { useState } from "react";
import { useEffect } from "react";
import HomeProduct from "../data/Home_product";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faClose, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
export default function ProductCategory({addlocart}) {
  let [Newproduct, setNewproduct] = useState([]);
  let [Featuredproduct, setFeaturedproduct] = useState([]);
  let [Topproduct, setTopproduct] = useState([]);
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
  useEffect(() => {
    productcategory();
  });
  let productcategory = () => {
    let newcategory = HomeProduct.filter((x) => {
      return x.type === "new";
    });
    setNewproduct(newcategory);
    let featuredproduct = HomeProduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedproduct(featuredproduct);
    let topproduct = HomeProduct.filter((x) => {
      return x.type === "top";
    });
    setTopproduct(topproduct);
  };
  
  return (
    <div className="product-type p-2">
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
      <div className="container grid grid-cols-12 p-2">
        <div className="box shadow-lg p-2 mx-2 col-span-4">
          <div className="header">
            <h3 className="uppercase bg-slate-400 text-center">new product</h3>
          </div>
          {/**header */}
          {Newproduct.map((card) => {
            return (
              <div className="box my-2 rounded-md hover:text-orange-600">
                <div className="img-box relative">
                  <img src={card.img} alt="image" />
                </div>
                {/**img-box */}
                <div className="deltails text-center py-2 items-center">
                  <h6 className="my-0 py-1">{card.Name}</h6>
                  <p className="my-0 py-1">{card.price} $</p>
                  <div className="icon">
                    <button className="px-2 py-0">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="px-2">
                      <FontAwesomeIcon icon={faEye} onClick={()=>detailpage(card)}  />
                    </button>
                    <button onClick={()=>addlocart(card)} className="px-2">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                  {/**icon */}
                </div>
                {/**delails */}
                {/**box */}
              </div>
            );
          })}
        </div>
        {/**box */}
        <div className="box shadow-lg p-2 mx-2 col-span-4">
          <div className="header">
            <h3 className="uppercase bg-slate-400 text-center">Top product</h3>
          </div>
          {/**header */}
          {Topproduct.map((card) => {
            return (
              <div className="box my-2 rounded-md hover:text-orange-600">
                <div className="img-box relative">
                  <img src={card.img} alt="image" />
                </div>
                {/**img-box */}
                <div className="deltails text-center py-2 items-center">
                  <h6 className="my-0 py-1">{card.Name}</h6>
                  <p className="my-0 py-1">{card.price} $</p>
                  <div className="icon">
                    <button className="px-2 py-0">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="px-2">
                      <FontAwesomeIcon icon={faEye} onClick={()=>detailpage(card)}  />
                    </button>
                    <button onClick={()=>addlocart(card)} className="px-2">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                  {/**icon */}
                </div>
                {/**delails */}
                {/**box */}
              </div>
            );
          })}
        </div>
        {/**box */}
        <div className="box shadow-lg p-2 mx-2 col-span-4">
          <div className="header">
            <h3 className="uppercase bg-slate-400 text-center">
              Featured product{" "}
            </h3>
          </div>
          {/**header */}
          {Featuredproduct.map((card) => {
            return (
              <div className="box my-2 rounded-md hover:text-orange-600">
                <div className="img-box relative">
                  <img src={card.img} alt="image" />
                </div>
                {/**img-box */}
                <div className="deltails text-center py-2 items-center">
                  <h6 className="my-0 py-1">{card.Name}</h6>
                  <p className="my-0 py-1">{card.price} $</p>
                  <div className="icon">
                    <button className="px-2 py-0">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="px-2">
                      <FontAwesomeIcon icon={faEye} onClick={()=>detailpage(card)}  />
                    </button>
                    <button onClick={()=>addlocart(card)} className="px-2">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                  {/**icon */}
                </div>
                {/**delails */}
                {/**box */}
              </div>
            );
          })}
        </div>
        {/**box */}
      </div>
      {/**container */}
      {/**product-type */}
    </div>
  );
}
