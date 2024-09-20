import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faHeadphones, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons/faTruckFast';
import './Footer.css';
import './medaiFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer(){
    return (
        <footer className='overflow-hidden' >
            <div className='cont  relative py-5 grid grid-cols-12'>
                <div className=' relative w-full  col-span-4 pt-6 '>
                    <div className='box mx-auto w-fit  flex '>
                        <div className='icon p-2 m-0 text-orange-600'>
                            <FontAwesomeIcon className='text-2xl' icon={faPiggyBank}/>
                        </div>{/**icon */}
                        <div className='text'>
                            <h5 className='p-0 m-0 text-orange-600'>creat saving</h5>
                            <p className='p-0 m-0 text-slate-400'>lorem inpsum abbr salamet</p>
                        </div>{/**text */}
                    </div>{/**box */}
                    <div className='box my-4 mx-auto  w-fit flex'>
                        <div className='icon p-2 m-0 text-orange-600'>
                            <FontAwesomeIcon className='text-2xl' icon={faTruckFast}/>
                        </div>{/**icon */}
                        <div className='text'>
                            <h5 className='text-orange-600'>creat saving</h5>
                            <p className='p-0 m-0 text-slate-400'>lorem inpsum abbr salamet</p>
                        </div>{/**text */}
                    </div>{/**box */}
                    <div className='box w-fit mx-auto my-4 flex'>
                        <div className='icon p-2 m-0 text-orange-600'>
                            <FontAwesomeIcon className='text-2xl' icon={faHeadphones}/>
                        </div>{/**icon */}
                        <div className='text'>
                            <h5 className='text-orange-600'>creat saving</h5>
                            <p className='p-0 m-0 text-slate-400'>lorem inpsum abbr salamet</p>
                        </div>{/**text */}
                    </div>{/**box */}
                    <div className='box w-fit mx-auto my-4 flex'>
                        <div className='icon p-2 m-0 text-orange-600'>
                            <FontAwesomeIcon className='text-2xl' icon={faCcVisa}/>
                        </div>{/**icon */}
                        <div className='text'>
                            <h5 className='text-orange-600'>creat saving</h5>
                            <p className='p-0 m-0 text-stone-400'>lorem inpsum abbr salamet</p>
                        </div>{/**text */}
                    </div>{/**box */}
                </div>{/**col-span-4 */}
                <div className='break text-center w-full col-span-8'>
                    <div className='box text-center'>
                        <img style={{width:'220px',height:'100px',margin:'0 auto' }} src='/image/Techayo1.png' alt='image'/>
                        <p  className='mx-auto block  text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusamus ut laudantium exercitationem provident!</p>
                    </div>{/**box */}
                    <div className='w-full text-center box-grid grid grid-cols-12  mt-20'>
                        <ul className='account col-span-4 text-center'>
                            <li><h5 className='uppercase text-slate-400'>your account</h5></li>
                            <li className='text-orange-600'>about us</li>
                            <li className='text-orange-600'>account</li>
                            <li className='text-orange-600'>payment</li>
                            <li className='text-orange-600'>sales</li>
                        </ul>{/**account */}
                        <ul className='products col-span-4 text-center'>
                            <li><h5 className='uppercase text-slate-400'>products</h5></li>
                            <li className='text-orange-600'>delivery</li>
                            <li className='text-orange-600'>track oder</li>
                            <li className='text-orange-600'>new product</li>
                            <li className='text-orange-600'>old product</li>
                        </ul>{/**products */}
                        <ul className='contact col-span-4'>
                            <li><h5 className='uppercase text-slate-400'>contact us</h5></li>
                            <li className='text-orange-600'>4005,sliver Business peincindia</li>
                            <li className='text-orange-600'>+[01228685121]</li>
                            <li className='text-orange-600'>info@gamil.com</li>
                        </ul>{/**contact */}
                    </div>{/**box */}
                </div>{/**col-span-8 */}
            </div>{/**grid */}
        </footer>

    )
}