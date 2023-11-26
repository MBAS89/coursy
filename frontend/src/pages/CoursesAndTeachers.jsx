import React from 'react'
import uiux from '../assets/images/uiux.jpg';
import logo from '../assets/images/logo.jpg';
import albert from '../assets/images/albert.jpg';

import { FaStar } from "react-icons/fa";

export const CoursesAndTeachers = () => {
    return (
    <div className='mt-14 w-[80%] mx-auto'>
        <h1 className='text-center font-bold text-4xl uppercase mb-10'>our special courses and teachers</h1>
        <section>
            <h2 className='text-left font-bold text-2xl capitalize mb-5 font-poppins'>Our special courses</h2>
            <div className='flex flex-wrap'>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] h-64'><img src={uiux} alt="course img" className='h-full'/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <span className='font-bold capitalize font-poppins text-blue-900'>marketing</span>
                        <div className="font-poppins text-sm">Course teacher <span className='text-pink-400 font-bold capitalize text-sm font-playpen'>jaklen smith</span></div>
                        <div className="badge badge-outline font-poppins text-xs">3hrs 30min</div> 
                        <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 right-4'>
                            <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                        </div>
                    </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] h-64'><img src={uiux} alt="course img" className='h-full'/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <span className='font-bold capitalize font-poppins text-blue-900'>marketing</span>
                        <div className="font-poppins text-sm">Course teacher <span className='text-pink-400 font-bold capitalize text-sm font-playpen'>jaklen smith</span></div>
                        <div className="badge badge-outline font-poppins text-xs">3hrs 30min</div> 
                        <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 right-4'>
                            <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                        </div>
                    </div>
                </div>
                <div className="card w-[340px] bg-base-100 shadow-xl m-5 mt-5">
                    <figure className='w-[340px] h-64'><img src={uiux} alt="course img" className='h-full'/></figure>
                    <div className="card-body">
                        <p className='font-black text-lg leading-6 font-poppins'>Organic Expressive Florals With Watercolor and Ink</p>
                        <span className='font-bold capitalize font-poppins text-blue-900'>marketing</span>
                        <div className="font-poppins text-sm">Course teacher <span className='text-pink-400 font-bold capitalize text-sm font-playpen'>jaklen smith</span></div>
                        <div className="badge badge-outline font-poppins text-xs">3hrs 30min</div> 
                        <div className='bg-green-400 flex items-center gap-1 w-14 px-1 rounded absolute top-5 right-4'>
                            <FaStar className='text-white'/><span className='text-white font-bold'>4.8</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='mt-20'>
            <h2 className='text-left font-bold text-2xl capitalize mb-5 font-poppins'>Our special teachers</h2>
            <div className='flex gap-14 flex-wrap'>
                <div className='relative'>
                    <img src={albert} alt="course img" className='h-96 w-96 rounded-3xl'/>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo img" className='h-16 w-16 rounded-full absolute bottom-10 -left-7'/>
                        <div className='ml-9 mt-3'>
                            <p className='font-poppins font-semibold text-xl capitalize'>daniela smith</p>
                            <p className='capitalize'>marketing expirte,harverd university</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={albert} alt="course img" className='h-96 w-96 rounded-3xl'/>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo img" className='h-16 w-16 rounded-full absolute bottom-10 -left-7'/>
                        <div className='ml-9 mt-3'>
                            <p className='font-poppins font-semibold text-xl capitalize'>daniela smith</p>
                            <p className='capitalize'>marketing expirte,harverd university</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={albert} alt="course img" className='h-96 w-96 rounded-3xl'/>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo img" className='h-16 w-16 rounded-full absolute bottom-10 -left-7'/>
                        <div className='ml-9 mt-3'>
                            <p className='font-poppins font-semibold text-xl capitalize'>daniela smith</p>
                            <p className='capitalize'>marketing expirte,harverd university</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={albert} alt="course img" className='h-96 w-96 rounded-3xl'/>
                    <div className='flex items-center'>
                        <img src={logo} alt="logo img" className='h-16 w-16 rounded-full absolute bottom-10 -left-7'/>
                        <div className='ml-9 mt-3'>
                            <p className='font-poppins font-semibold text-xl capitalize'>daniela smith</p>
                            <p className='capitalize'>marketing expirte,harverd university</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
