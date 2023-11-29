import React from 'react'
import { Link } from 'react-router-dom'
import Jaklen from '../assets/images/jaklen.jpg';
import ad from '../assets/images/ad.jpg';

import { FaRegBookmark } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
export const Newsfeed = () => {
    return (
    <div className='h-screen bg-zinc-100'>
        <section className='bg-pink-300 h-20'></section>
        <div className='flex'>
            <section className='w-96'>
                <div className="flex h-[800px] w-80 flex-col justify-between px-4 ">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <Link className="px-4 py-2 font-medium flex items-center gap-3 text-gray-700 text-xl bg-gray-50 rounded-full"><img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/> rose walker</Link>
                        </li>
                        <li>
                            <Link className="px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:text-xl flex items-center gap-3 text-lg rounded-full"><FaRegBookmark className=''/>Saved</Link>
                        </li>
                        <li>
                            <Link className="px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:text-xl flex items-center gap-3 text-lg rounded-full"><FaRegCalendarAlt className='w-5 h-5'/> Calendar</Link>
                        </li>
                        <li>
                            <Link className="px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:text-xl flex items-center gap-3 text-lg rounded-full"><TiDocumentText  className='w-6 h-6'/> Documents</Link>
                        </li>
                        <li>
                            <Link className="px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:text-xl flex items-center gap-3 text-lg rounded-full"><ImProfile className='w-5 h-5'/> Profile</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='w-[1300px]'>
                <div className='w-[900px] h-28 mx-40 mt-5 pb-6 px-4 flex items-start gap-5 rounded-xl bg-white'>
                    <img src={Jaklen} alt="course img" className='h-10 w-10 ml-3 mt-7 rounded-full'/>
                    <input type="text" placeholder="What do you want to write?" className="input input-bordered input-sm w-[80%] rounded-full mt-8 bg-gray-100"/>
                    <MdOutlinePhotoLibrary className='text-3xl text-gray-400 hover:text-indigo-500 cursor-pointer mt-8'/>
                </div>
                <div className='mx-40 p-4 rounded-xl mt-5 bg-white'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex items-center gap-3 mt-4'>
                            <div className=''>
                                <img src={Jaklen} alt="course img" className='h-10 w-10 ml-3 rounded-full'/>
                            </div>
                            <div className='font-poppins text-sm '>
                                <span className=''>patric mark</span>
                                <div className='flex items-center gap-1'>
                                    <span className='text-sm'>5h</span>
                                    <IoEarthSharp />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 mr-4 mt-4 '>
                            <BsThreeDots className=''/>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <p className='font-poppins'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='flex items-center justify-between mx-20 mt-5'>
                        <span className='flex items-center gap-1'><AiOutlineLike />Like</span>
                        <span className='flex items-center gap-1'><FaRegCommentDots />Comment</span>
                       <span className='flex items-center gap-1'><PiShareFat />Share</span>
                    </div>
                </div>
            </section>
            <section className='w-96 border-l-2 border-gray-200'>
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
