import React from 'react';
import { Link } from 'react-router-dom';
import './MadieHome.css'
export default function TopBanner(){

    return(
        <div className=" relative top-banner  max-w-full py-12 px-14">
          <div className="container-up w-full py-2.5 px-14 relative">
            <h3 className="text-xl text-orange-600 font-medium tracking-wide">
              silver aluminum
            </h3>
            <h2 className="uppercase tracking-wide text-4xl mt-2.5">app watch</h2>
            <p className="text-slate-400 mt-2.5 mb-4 tracking-wide">
              30% off at your first odder
            </p>
            <Link
              className="no-underline bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-800"
              to="/shop"
            >
              shop now
            </Link>
          </div>
          {/**container */}
        {/**top_banner */}
        </div>
        
    )
}