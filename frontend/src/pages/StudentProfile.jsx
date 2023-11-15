import React from 'react'
import Jaklen from '../assets/images/jaklen.jpg';
import uiux from '../assets/images/uiux.jpg';
import { AiOutlineLike } from "react-icons/ai";
export const StudentProfile = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <section className='flex gap-3 mb-20'>
                <img src={Jaklen} className='w-36 h-36 rounded-lg'/>
                <div className='mt-4'>
                    <span className='font-bold capitalize font-playpen text-2xl'>jaklen smith</span>
                    <div className='flex gap-5 mt-2 font-poppins mb-3'>
                        <span className='text-orange-400'><span>50k </span>Followers</span>
                        <span className='text-purple-400'><span>100 </span>Following</span>
                        <span className='text-blue-400 flex items-center gap-1'><span><AiOutlineLike/></span><span>30 </span>Likes</span>
                    </div>
                    <div>
                        <p className='font-poppins capitalize text-sm font-medium'>productive time<span className='text-gray-400'> / day</span></p>
                        <div className='flex items-center gap-3'>
                            <p className='font-poppins text-xl font-medium'>4 hr</p>
                            <div className='flex items-center'>
                                <div className="inline-flex gap-2 self-end rounded border border-solid border-1 border-lime-500 p-px text-lime-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                    </svg>
                                </div>
                                <span className="text-xs font-medium text-lime-500"> +67%last week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 className='font-poppins font-medium text-4xl capitalize mb-3'>my list</h1>
                <div className='flex gap-10 mb-10 font-poppins text-lg'>
                    <button className='underline underline-offset-8 hover:font-bold'>In Progress</button>
                    <button className='hover:font-bold'>Completed</button>
                    <button className='hover:font-bold'>Not Started(Interested In)</button>
                </div>
                <div className='flex gap-8'>
                    <div>
                        <img src={uiux} alt="course img" className='w-80 h-60 rounded-xl mb-3'/>  
                        <p className='font-poppins w-80 text-lg my-3'>Video for Instagram: Tell an Engaging Story in Less Than a Minute</p>
                        <span className="block rounded-full bg-gray-200 w-80">
                            <span className="block h-1 rounded-full bg-indigo-600 w-[10%]"></span>
                        </span>
                        <div className='w-80 flex justify-between'>
                            <span>10%</span>
                            <span className='text-gray-400 text-sm'>5h 12min/30h 30min</span>
                        </div>
                    </div>
                    <div>
                        <img src={uiux} alt="course img" className='w-80 h-60 rounded-xl mb-3'/>  
                        <p className='font-poppins w-80 text-lg my-3'>Video for Instagram: Tell an Engaging Story in Less Than a Minute</p>
                        <span className="block rounded-full bg-gray-200 w-80">
                            <span className="block h-1 rounded-full bg-indigo-600 w-[45%]"></span>
                        </span>
                        <div className='w-80 flex justify-between'>
                            <span>45%</span>
                            <span className='text-gray-400 text-sm'>5h 12min/30h 30min</span>
                        </div>
                    </div>
                    <div>
                        <img src={uiux} alt="course img" className='w-80 h-60 rounded-xl mb-3'/>  
                        <p className='font-poppins w-80 text-lg my-3'>Video for Instagram: Tell an Engaging Story in Less Than a Minute</p>
                        <span className="block rounded-full bg-gray-200 w-80">
                            <span className="block h-1 rounded-full bg-indigo-600 w-[80%]"></span>
                        </span>
                        <div className='w-80 flex justify-between'>
                            <span>80%</span>
                            <span className='text-gray-400 text-sm'>5h 12min/30h 30min</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-32 mb-20'>
                <h1 className='font-poppins font-medium text-4xl capitalize mb-3'>Favorite Teacher</h1>
                <div className='flex gap-3 cursor-pointer mt-7 mb-5'>
                    <div>
                        <img src={Jaklen} alt="course img" className='h-56 w-56 rounded-xl'/>
                        <p className='font-poppins font-semibold text-lg capitalize mt-4'>daniela smith</p>
                        <p className=' text-sm capitalize'>marketing expirte,harverd university</p>
                    </div>
                    <div>
                        <img src={Jaklen} alt="course img" className='h-56 w-56 rounded-xl'/>
                        <p className='font-poppins font-semibold text-lg capitalize mt-4'>daniela smith</p>
                        <p className=' text-sm capitalize'>marketing expirte,harverd university</p>
                    </div>
                    <div>
                        <img src={Jaklen} alt="course img" className='h-56 w-56 rounded-xl'/>
                        <p className='font-poppins font-semibold text-lg capitalize mt-4'>daniela smith</p>
                        <p className=' text-sm capitalize'>marketing expirte,harverd university</p>
                    </div>
                </div>
            </section>
            <section className='mb-20'>
                <h1 className='font-poppins font-medium text-4xl capitalize mb-3'>favorite courses</h1>
                <div className='flex gap-8'>
                    <div className='w-64 h-[370px] rounded-2xl mt-7 shadow-2xl bg-zinc-100'>
                        <div className=' pt-3'>
                            <img src={uiux} alt="course img" className='w-60 h-48 rounded-2xl mb-3 mx-auto'/>
                        </div>
                        <p className='font-bold text-lg text-left mx-3 mb-3'>Video for Instagram: Tell an Engaging Story in Less Than a Minute</p>
                        <div className='flex gap-3 mx-3'>
                            <img src={Jaklen} className='w-12 h-12 rounded-full'/>
                            <div className='flex flex-col'>
                                <span className='font-semibold capitalize text-sm'>dany holmes</span>
                                <span className='text-xs'>April24,2023</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-64 h-[370px] rounded-2xl mt-7 shadow-2xl bg-zinc-100'>
                        <div className=' pt-3'>
                            <img src={uiux} alt="course img" className='w-60 h-48 rounded-2xl mb-3 mx-auto'/>
                        </div>
                        <p className='font-bold text-lg text-left mx-3 mb-3'>Video for Instagram: Tell an Engaging Story in Less Than a Minute</p>
                        <div className='flex gap-3 mx-3'>
                            <img src={Jaklen} className='w-12 h-12 rounded-full'/>
                            <div className='flex flex-col'>
                                <span className='font-semibold capitalize text-sm'>dany holmes</span>
                                <span className='text-xs'>April24,2023</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-64 h-[370px] rounded-2xl mt-7 shadow-2xl bg-zinc-100'>
                        <div className=' pt-3'>
                            <img src={uiux} alt="course img" className='w-60 h-48 rounded-2xl mb-3 mx-auto'/>
                        </div>
                        <p className='font-bold text-lg text-left mx-3 mb-3'>Video for Instagram: Tell an Engaging Story in Less Than a Minute</p>
                        <div className='flex gap-3 mx-3'>
                            <img src={Jaklen} className='w-12 h-12 rounded-full'/>
                            <div className='flex flex-col'>
                                <span className='font-semibold capitalize text-sm'>dany holmes</span>
                                <span className='text-xs'>April24,2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}
