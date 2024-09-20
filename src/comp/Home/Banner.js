import React from "react";
import './Home.css';


export default function Banner(){
    return(
        <div className="banner max-w-full text-center mt-10 p-5">
            <h2 className="text-2xl uppercase mb-5">banner</h2>
                <div className="container grid grid-cols-12 gap-0">
                    <div className="box bg-slate-500 col-span-3  relative">
                        <img className="w-full" src='/image/Multi-Banner-1.avif' alt=''/>
                        <img className="w-full" src='/image/Multi-banner-2.avif' alt=''/>
                    </div>{/**box */}

                    <div className='box col-span-9 relative'>
                        <div className="box-in grid grid-cols-12 relative ">
                            <img className="col-span-9 w-full" src='/image/Multi-Banner-3.webp' alt=''/>
                            <img className="col-span-3 w-full h-full" src='/image/Multi-banner-4.avif' alt=''/>
                        </div>
                        <div className="box-in relative">
                            <img className="w-full" src='/image/Multi-Banner-5.webp' alt=''/>
                        </div>
                    </div>
                </div>{/**container */}

            {/**banner */}
        </div>
    )
}