import React from "react";
import "./Home.css";
import './MadieHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function OurText(){
    return(
        <div className="relative ourtext w-full bg-slate-300 right-box text-center py-5">
        <h3 className="text-3xl uppercase">our testmonial</h3>
  <div className="container grid gap-5 py-16 ">

      <div className="detail">
        <div className="img-box relative w-full ">
          <img className="rounded-lg max-w-full" src='/image/cellcenter.jpg' alt='test'/>
        </div>{/**img-box */}
      </div>{/**detail */}

      <div className="info">
        <h3 className="text-orange-600 uppercase text-2xl my-2">stephan robot</h3>
        <h4 className="text-slate-500 text-xl my-2 tracking-wide">web designer</h4>
        <p className="text-slate-400 text-md">ouis faucibus enim vitae nunc molestie , nec facilisis arcu pulvinar nullam mattisr nullam mattis </p>
      <div className="newsletter">
          <h3 className="text-orange-600 uppercase mt-5 mb-2">news letter</h3>
          <p className="text-slate-400 tracking-wide">join our malling list</p>
          <input className="block border mx-auto py-2 px-3 rounded-md hover:text-orange-600 w-75" type='email' placeholder="E-mail" outoComlete='off'/>
          <button className="bg-orange-600 my-3 py-2 px-5 text-white text-xl rounded-lg hover:bg-orange-800">subscribe</button>
          <div className="icon-box py-2">
            <FontAwesomeIcon className="mx-3 text-2xl cursor-pointer text-slate-400 hover:text-orange-600" icon={faFacebook}/>
            <FontAwesomeIcon className="mx-3 text-2xl cursor-pointer text-slate-400 hover:text-orange-600" icon={faTwitter}/>
            <FontAwesomeIcon className="mx-3 text-2xl cursor-pointer text-slate-400 hover:text-orange-600" icon={faWhatsapp}/>
            <FontAwesomeIcon className="mx-3 text-2xl cursor-pointer text-slate-400 hover:text-orange-600" icon={faGithub}/>
            <FontAwesomeIcon className="mx-3 text-2xl cursor-pointer text-slate-400 hover:text-orange-600" icon={faInstagram}/>

          </div>{/**icon-box */}
      </div>{/**newsletter */}
      </div>{/**info */}
  </div>{/**container */}
  {/**right-box */}
</div>

    )
}