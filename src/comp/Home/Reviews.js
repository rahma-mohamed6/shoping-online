import React, { useState } from "react";
import DataReview from "../data/Reviews_data";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Reviews(){
    let [datareview ,setdatareview]=useState(DataReview)
    let settings={
        dost:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1
    }
    if(window.innerWidth <= 755){
        settings.slidesToShow =1;
       
    }
    else if(window.innerWidth >755){
        settings.slidesToShow =3;
    }
    return(
        <div  className="Reviews w-full text-center bg-slate-300 py-5">
                <h2 className="uppercase mb-4">reviews</h2>
            <div className='container my-20  mx-16'>
                <Slider {...settings}>
            { datareview.map((d) => {
                return(
                    <div className="box mx-2 bg-white h-[450px] text-black rounded-xl  ">
                    <div className="img-box rounded-t-xl flex justify-center items-center bg-orange-600 py-3">
                        <img src={d.img} alt='image' className="h-44 w-44 rounded-full "/>
                    </div>
                     {/**img-box */}
                    <div className="text flex flex-col justify-center items-center gap-4 p-4 text-center ">
                        <h3>{d.Name}</h3>
                        <p>{d.review}</p>
                        {/**text */}
                    </div>
                    {/**box */}
                    </div>
             ) })
            }
            </Slider>
            </div>{/**container */}
        {/**Reviews */}
        </div>


    )
}