import React ,{useState} from "react";
import './Shop.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar, } from "@fortawesome/free-regular-svg-icons";
import { faClose, faHeartCircleBolt,  } from "@fortawesome/free-solid-svg-icons";

export default function Rightbox({shop,addlocart}){
  let [showdetail,setshowdetail]=useState(false);
  let [detail,setdetail]=useState([])

  let detailpage=(product)=>{
    let detaildata=([{product}]);
    let productdata=detaildata[0]['product']
    setdetail(productdata)
    setshowdetail(true);
  }
  
  let closedetail=()=>{
    setshowdetail(false)
  }
    return(
      <>
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
        <div className="right-box">
        <div className="banner max-w-full">
          <div className="img-box">
            <img className="w-full" src='/image/shop_top.webp' alt=''/>
          </div>{/**img-box */}
        </div>{/**banner */}
        <div className="product-box w-full py-2.5 px-5">
            <h2 className="text-orange-600 uppercase tracking-wide text-xl mt-2.5">shop product</h2>

          <div className="product-container max-w-full ">
                {
                    shop.map((card)=>{
                        return(
                        <div className="box p-2 rounded-xl text-center relative overflow-hidden shadow-md">
                            <div className="img-box w-full text-center">
                                <img src={card.img} className="h-36 mx-auto" alt=''/>
                            </div>{/**img-box */}
                            <div className="icon absolute flex flex-col ">
                              <FontAwesomeIcon className="icons p-2 bg-white shadow-sm my-2 hover:text-orange-500" icon={faHeartCircleBolt}/>
                              <FontAwesomeIcon onClick={()=>detailpage(card)} className="icons p-2 bg-white shadow-sm my-2 hover:text-orange-500" icon={faEye} />
                            </div>{/**icon */}
                              <div className="detail w-full text-center">
                                <h5 className="uppercase text-orange-500 my-2">{card.Name}</h5>
                                <p className="text-lg">{card.price} $</p>
                                <button onClick={()=> addlocart(card)} className="capitalize bg-orange-500 rounded-lg text-lx text-white py-2 px-5">add cart</button>
                              </div>{/**detail */}
                            {/**box */}
                        </div>
                        )
                    })
                }
          </div>{/**product-container */}
        </div>{/**product-box */}
        {/**right-box */}
      </div>
      </>
    )
}