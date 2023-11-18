import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import Jaklen from '../assets/images/jaklen.jpg';

export const Chatpage = () => {
    return (
    <div>
        <section className='bg-pink-300 h-20'></section>
        <section className='bg-zinc-100 h-screen flex'>
            <div className="flex h-[800px] w-80 ml-10 my-5 flex-col justify-between rounded-3xl px-4 py-6 bg-white">
                <ul className="mt-6 space-y-1">
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg bg-gray-50 px-4 py-2 font-medium flex items-center gap-3 border-r-4 border-indigo-500 text-indigo-500 text-xl"><RxDashboard className='w-5 h-5'/> Dashboard</Link>
                    </li>
                    <li>
                        <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 hover:border-r-4 hover:border-indigo-500 hover:text-indigo-500 hover:text-xl flex items-center gap-3 text-lg"><BsChatLeftText className='w-5 h-5'/> Chat</Link>
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
            <div className="h-[800px] w-80 ml-10 my-5 flex-col justify-between rounded-3xl px-4 py-6 bg-white">
                <div className='flex items-center justify-between mb-5'>
                    <p className='text-2xl font-poppins font-bold'>Chat</p>
                    <button className="btn btn-md text-lg font-poppins bg-indigo-500">+</button>
                </div>
                <div className=''>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                            <span className='font-bold font-poppins capitalize'>michale jordan</span>
                        </div>
                        <span className='text-gray-400 font-semibold'>4m</span>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <p className='text-gray-400 text-sm font-semibold'>is simply dummy text of the</p>
                        <span className='bg-pink-500 rounded-full p-1'>3</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
