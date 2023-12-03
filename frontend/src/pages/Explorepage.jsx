import React from 'react'
import { Link } from 'react-router-dom';

import { ImProfile } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

import { PiCopySimpleBold } from "react-icons/pi";
export const Explorepage = () => {
    return (
    <div className='flex'>
        <section className='w-[20%]'>
            <div className="flex flex-col pl-8 py-6 h-full bg-zinc-200">
                <div className='text-4xl text-white'>Logo</div>
                <ul className="mt-6 space-y-1">
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg pl-4 py-2 font-medium flex items-center gap-3 border-r-8 border-white text-white text-2xl"><IoHomeOutline className='w-5 h-5'/> Home</Link>
                    </li>
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><MdSearch className='w-5 h-5'/> Search</Link>
                    </li>
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><MdExplore className='w-5 h-5'/> Explore</Link>
                    </li>
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><MdNotifications className='w-6 h-6'/> Notifications</Link>
                    </li>
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><ImProfile className='w-5 h-5'/> Profile</Link>
                    </li>
                </ul>
            </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-[1000px] mx-auto mt-5">
            <div className='relative'>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                <BiMoviePlay className='absolute top-5 left-72 text-3xl text-blue-400'/>
            </div>
            
            <div className='relative'>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                <PiCopySimpleBold className='absolute top-5 left-72 text-3xl text-blue-400'/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
            </div>
            <div>
                <img className="h-80 max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
            </div>
        </div>
    </div>
  )
}
