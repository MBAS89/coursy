import React from 'react'
import { Link } from "react-router-dom";
import uiux from '../assets/images/uiux.jpg';
import Jaklen from '../assets/images/jaklen.jpg';
import { FaStar } from "react-icons/fa";
import { BsFillSuitDiamondFill } from "react-icons/bs";

export const CoursesAndTeachers = () => {
    return (
    <div className='mt-14 w-[80%] h-1/6 mx-auto '>
        <h1 className='text-center font-bold text-4xl uppercase mb-10'>our special courses and teachers</h1>
        <section>
            <h2 className='text-left font-bold text-2xl capitalize mb-5 font-poppins'>Our special courses</h2>
            <div className='flex flex-wrap'>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] relative'><img src={uiux} alt="course img"/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <div className=' text-slate-300 flex items-center gap-2'>
                            <span className='uppercase font-bold'>Marketing</span>
                            <div className='text-center'>
                                <BsFillSuitDiamondFill className='text-[8px] text-slate-300'/>
                            </div>
                            <span className='uppercase font-bold'>uiux</span>
                        </div>
                        <div className="font-poppins text-sm flex items-center gap-2"><img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/> <span className='text-slate-300 font-bold capitalize text-sm font-poppins'>jaklen smith</span></div>
                        <div className='flex'>
                            <p className="absolute bottom-52 font-poppins text-white">3hrs 30min</p>
                            <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 left-4'>
                                <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] relative'><img src={uiux} alt="course img"/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <div className=' text-slate-300 flex items-center gap-2'>
                            <span className='uppercase font-bold'>Marketing</span>
                            <div className='text-center'>
                                <BsFillSuitDiamondFill className='text-[8px] text-slate-300'/>
                            </div>
                            <span className='uppercase font-bold'>uiux</span>
                        </div>
                        <div className="font-poppins text-sm flex items-center gap-2"><img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/> <span className='text-slate-300 font-bold capitalize text-sm font-poppins'>jaklen smith</span></div>
                        <div className='flex'>
                            <p className="absolute bottom-52 font-poppins text-white">3hrs 30min</p>
                            <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 left-4'>
                                <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] relative'><img src={uiux} alt="course img"/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <div className='text-slate-300 flex items-center gap-2'>
                            <span className='uppercase font-bold'>Marketing</span>
                            <div className='text-center'>
                                <BsFillSuitDiamondFill className='text-[8px] text-slate-300'/>
                            </div>
                            <span className='uppercase font-bold'>uiux</span>
                        </div>
                        <div className="font-poppins text-sm flex items-center gap-2"><img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/> <span className='text-slate-300 font-bold capitalize text-sm font-poppins'>jaklen smith</span></div>
                        <div className='flex'>
                            <p className="absolute bottom-52 font-poppins text-white">3hrs 30min</p>
                            <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 left-4'>
                                <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] relative'><img src={uiux} alt="course img"/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <div className=' text-slate-300 flex items-center gap-2'>
                            <span className='uppercase font-bold'>Marketing</span>
                            <div className='text-center'>
                                <BsFillSuitDiamondFill className='text-[8px] text-slate-300'/>
                            </div>
                            <span className='uppercase font-bold'>uiux</span>
                        </div>
                        <div className="font-poppins text-sm flex items-center gap-2"><img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/> <span className='text-slate-300 font-bold capitalize text-sm font-poppins'>jaklen smith</span></div>
                        <div className='flex'>
                            <p className="absolute bottom-52 font-poppins text-white">3hrs 30min</p>
                            <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 left-4'>
                                <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='mt-20'>
            <h2 className='text-left font-bold text-2xl capitalize mb-5 font-poppins'>Our special teachers</h2>
            <div className='flex'>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] h-64'><img src={Jaklen} alt="course img"/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <div className="font-poppins text-sm mt-3">Course teacher <span className='text-pink-400 font-bold capitalize text-sm font-playpen'>jaklen smith</span></div>
                        <div className="card-actions justify-between items-center">
                            <div className="badge badge-outline font-poppins text-xs">3hrs 30min</div> 
                            <div className="rating w-24 h-5 items-center">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] h-64'><img src={uiux} alt="course img" className='h-full'/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <span className='font-bold capitalize font-poppins text-blue-900'>marketing</span>
                        <div className="font-poppins text-sm">Course teacher <span className='text-pink-400 font-bold capitalize text-sm font-playpen'>jaklen smith</span></div>
                        <div className="card-actions justify-between items-center">
                            <div className="badge badge-outline font-poppins text-xs">3hrs 30min</div> 
                            <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 right-4'>
                                <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                            </div>
                            {/*
                            <div className="rating w-24 h-5 items-center">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/*
            <Link to='/singlecourse' className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </Link>
            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure className='bg-pink-300'><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>*/}
{/*
            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>
            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>
            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>
            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>
            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>

            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>

            <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                <figure><img src={uiux} alt="course img" /></figure>
                <div className="card-body">
                    <p className='font-bold text-lg leading-6'>Organic Expressive Florals With Watercolor and Ink</p>
                    <div className="card-actions justify-between items-center">
                        <div className="">Course teacher <span className='text-pink-400 font-bold uppercase text-sm'>daniel smith</span></div>
                        <div className="badge badge-outline">3hrs 30min</div> 
                    </div>
                </div>
            </div>*/}
        
    </div>
  )
}
