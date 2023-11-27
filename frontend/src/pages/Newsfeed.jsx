import React from 'react'
import { Link } from 'react-router-dom'
import Jaklen from '../assets/images/jaklen.jpg';
import ad from '../assets/images/ad.jpg';

import { BsBookmark } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { CiImageOn } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
export const Newsfeed = () => {
    return (
    <div>
        <section className='bg-pink-300 h-20'></section>
        <div className='flex'>
            <section className='w-96'>
                <div className="flex h-[800px] w-80 ml-5 my-5 flex-col justify-between rounded-3xl px-4 py-6 bg-zinc-400">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium flex items-center gap-3 border-r-4 border-indigo-500 text-indigo-500 text-xl bg-gray-50"><img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/> rose walker</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:border-r-4 hover:border-indigo-500 hover:text-indigo-500 hover:text-xl flex items-center gap-3 text-lg"><BsBookmark className='text-sm'/>Saved</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:border-r-4 hover:border-indigo-500 hover:text-indigo-500 hover:text-xl flex items-center gap-3 text-lg"><FaRegCalendarAlt className='w-5 h-5'/> Calendar</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:border-r-4 hover:border-indigo-500 hover:text-indigo-500 hover:text-xl flex items-center gap-3 text-lg"><TiDocumentText  className='w-6 h-6'/> Documents</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:border-r-4 hover:border-indigo-500 hover:text-indigo-500 hover:text-xl flex items-center gap-3 text-lg"><ImProfile className='w-5 h-5'/> Profile</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='w-[1300px] bg-teal-300'>
                <div className='w-[900px] h-32 mx-40 mt-5 pb-6 flex items-start gap-3 bg-white'>
                    <img src={Jaklen} alt="course img" className='h-10 w-10 ml-3 mt-7 rounded-full'/>
                    <input type="text" placeholder="Type here" className="input w-[80%] mt-7 bg-rose-400" />
                    <CiImageOn className='text-5xl text-gray-400 hover:text-indigo-500 cursor-pointer mt-7'/>
                </div>
                <div className='mx-40'>
                    <div className='flex justify-between bg-purple-300'>
                        <div className='flex items-center bg-yellow-100'>
                            <div className='bg-blue-400'>
                                <img src={Jaklen} alt="course img" className='h-14 w-14 ml-3 mt-7 rounded-full'/>
                            </div>
                            <div>
                                <span>patric mark</span>
                                <div className='flex items-center gap-1'>
                                    <span>5h</span>
                                    <IoEarthSharp />
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <BsThreeDots className='text-4xl'/>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <p></p>
                    <AiOutlineLike />
                    <FaRegCommentDots />
                    <PiShareFat />
                </div>
            </section>
            <section className='w-96'>
                <h3 className='font-poppins font-medium mt-3 ml-2 text-gray-500'>Sponsored</h3>
                <div className='flex items-center gap-3 mx-3 mt-3 cursor-pointer hover:bg-zinc-100'>
                    <img src={ad} alt="course img" className='h-32 w-32 rounded-lg'/>
                    <div className=''>
                        <p className='font-medium'>One time payment only $10</p>
                        <span className='text-gray-500 text-sm'>rain.com</span>
                    </div>
                </div>
                <div className='flex items-center gap-3 mx-3 mt-3 cursor-pointer hover:bg-zinc-100'>
                    <img src={ad} alt="course img" className='h-32 w-32 rounded-lg'/>
                    <div className=''>
                        <p className='font-medium'>One time payment only $10</p>
                        <span className='text-gray-500 text-sm'>rain.com</span>
                    </div>
                </div>
                <span className="flex items-center mt-3">
                    <span className="h-px flex-1 bg-gray-200"></span>
                </span>
            </section>
        </div>
    </div>
  )
}
