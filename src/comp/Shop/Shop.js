import React,{useStat} from "react";
import './Shop.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleBolt } from "@fortawesome/free-solid-svg-icons";
import Rightbox from "./Rightbox";
import Footer from "../Footer/Footer";

export default function Shop({shop , Filter, all,addlocart}){
  
    return(
      <>
    
      <div className="shop w-full py-5 px-7">
        <h2 className="uppercase tracking-wide text-orange-600 text-3xl font-light"># shop</h2>
        <p className="mt-1.5 text-slate-400 text-sm font-semibold">home . shop</p>
        <div className="containr max-w-full flex ">
        <div className="left-box">
        <div className="categroy w-full ">
          <div className="header max-w-full py-2.5 text-center text-lg uppercase text-slate-400">
            <h3 className="text-xl text-orange-600 tracking-wide uppercase text-center">all categories</h3>
          </div>{/**header */}
          <div className="box  mt-2.5 w-full">
            <ul className="max-w-full ">
              <li onClick={()=>all()} >#all</li>
              <li onClick={()=>Filter('tv')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># tv</li>
              <li onClick={()=>Filter('laptop')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># laptop</li>
              <li onClick={()=>Filter('watch')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># watch</li>
              <li onClick={()=>Filter('speaker')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># speaker</li>
              <li onClick={()=>Filter('electronics')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># electronics</li>
              <li onClick={()=>Filter('headphone')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># headphone</li>
              <li onClick={()=>Filter('phone')} className="list-none  uppercase mt-1.5 text-sm tracking-wide text-slate-400 font-semibold cursor-pointer duration-1000 hover:text-slate-300"># phone</li>
            </ul>
          </div>{/**box */}
        </div>{/**categrioy */}
        <div className="banner w-full mt-5">
          <img className="w-full" src='/image/shop_left.avif' alt='image'/>
        </div>{/**banner */}
        {/**left-box */}
      </div>
      

        <Rightbox shop={shop} Filter={Filter} addlocart={addlocart} />
        </div>{/**container */}
        {/**shop */}
      </div>
      <Footer/>
    </>  
    )
}