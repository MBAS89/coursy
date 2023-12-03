import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GoPersonAdd } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FiBookmark } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import { MdPersonOutline } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPhoneOff } from "react-icons/fi";
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
            <div className="h-[800px] w-80 ml-10 my-5 flex-col justify-between rounded-3xl py-6 bg-white">
                <div className='flex items-center justify-between mb-5 px-4'>
                    <p className='text-2xl font-poppins font-bold'>Chat</p>
                    <button className="btn btn-md px-6 text-lg text-white font-poppins bg-indigo-500"><GoPlus /></button>
                </div>
                <ul>
                    <li className='px-4 py-3 border-b border-slate-300 hover:bg-gray-50 hover:border-r-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                                <span className='font-bold font-poppins capitalize'>michale jordan</span>
                            </div>
                            <span className='text-gray-400 font-semibold'>4m</span>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p className='text-gray-400 text-sm font-semibold'>Is simply dummy text of the</p>
                            <span className='bg-pink-500 rounded-full w-6 h-6 text-center text-white'>3</span>
                        </div>
                    </li>
                    <li className='px-4 py-3 border-b border-slate-300 hover:bg-gray-50 hover:border-r-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                                <span className='font-bold font-poppins capitalize'>michale jordan</span>
                            </div>
                            <span className='text-gray-400 font-semibold'>4m</span>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p className='text-gray-400 text-sm font-semibold'>Is simply dummy text of the</p>
                            <span className='bg-pink-500 rounded-full w-6 h-6 text-center text-white'>3</span>
                        </div>
                    </li>
                    <li className='px-4 py-3 border-b border-slate-300 hover:bg-gray-50 hover:border-r-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                                <span className='font-bold font-poppins capitalize'>michale jordan</span>
                            </div>
                            <span className='text-gray-400 font-semibold'>4m</span>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p className='text-gray-400 text-sm font-semibold'>Typing something....</p>
                            <span className='bg-pink-500 rounded-full w-6 h-6 text-center text-white'>3</span>
                        </div>
                    </li>
                    <li className='px-4 py-3 border-b border-slate-300 hover:bg-gray-50 hover:border-r-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <div className='flex'>
                                    <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                                    <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                                </div>
                                <span className='font-bold font-poppins capitalize'>michale/jordan</span>
                            </div>
                            <span className='text-gray-400 font-semibold'>4m</span>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p className='text-gray-400 text-sm font-semibold'>Is simply dummy text of the</p>
                            <span className='bg-pink-500 rounded-full w-6 h-6 text-center text-white'>3</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='h-[800px] w-[750px] ml-10 my-5 rounded-3xl pb-6 relative bg-indigo-100'>
                <div className='flex justify-between px-4 pb-3 rounded-t-3xl bg-white'>
                    <div className='flex items-center gap-3 mt-7 '>
                        <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                        <span className='font-bold font-poppins capitalize'>michale jordan</span>
                    </div>
                    <div className='flex gap-4 text-xl p-3 mt-7 rounded-full bg-indigo-100'>
                        <CiStar /> <AiOutlineExclamationCircle /> <GoPersonAdd />
                    </div>
                </div>
                <div className='px-4 py-3'>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                            </div>
                        </div>
                        <div className="chat-header">
                            <span className='font-semibold mr-2'>Michale</span>
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble chat-bubble-secondary">Hi. Whats up ?</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                            </div>
                        </div>
                        <div className="chat-header">
                            <span className='font-semibold mr-2'>Ana</span>
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble chat-bubble-primary">Well, and you!</div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                            </div>
                        </div>
                        <div className="chat-header">
                            <span className='font-semibold mr-2'>Michale</span>
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble chat-bubble-secondary">...</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    <div className="flex items-center mt-5">
                        <div className="flex-grow border-t-2 border-slate-300"></div>
                        <div className="mx-10 text-slate-400">Today</div>
                        <div className="flex-grow border-t-2 border-slate-300"></div>
                    </div>
                </div>
                <div className='absolute bottom-4 flex justify-between w-[95%] mx-4 py-2 rounded-xl bg-white'>
                    <input type="text" placeholder="Type your message" className="input input-sm h-9 w-full max-w-xs ml-2"/>
                    <div className='flex items-center gap-3'>
                        <IoSettingsOutline className='text-xl text-gray-400 hover:text-indigo-500 cursor-pointer'/> <CiImageOn className='text-xl text-gray-400 hover:text-indigo-500 cursor-pointer'/> 
                        <button>
                            <LuSend className='text-white p-2 w-9 h-9 text-3xl mr-2 rounded-xl bg-indigo-500'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-[800px] w-80 ml-10 my-5 rounded-3xl bg-white'>
                <div className='flex justify-between px-4 py-3 mt-6 text-xl text-gray-500'>
                    <IoSettingsOutline/>
                    <FiBookmark />
                </div>
                <div className='relative'>
                    <img src={Jaklen} className='w-20 h-20 rounded-full mx-auto relative'/>
                    <TbPencil className='absolute top-14 left-[180px] text-white bg-indigo-700 rounded-full w-6 h-6 p-1'/>
                    <p className='text-center font-poppins font-bold mt-3 text-xl'>Michale Jordan</p>
                </div>
                <div className='flex items-center gap-4 text-xl text-gray-400 justify-center mt-2'>
                    <MdPersonOutline className='text-2xl'/>
                    <p className='font-semibold'>Content manager</p>
                </div>
                <div className='flex justify-between items-center w-[60%] mx-auto mt-5 rounded-lg p-1 shadow-2xl bg-white'>
                    <div className='flex items-center gap-1'>
                        <GoDotFill className='text-indigo-700 text-xs'/>
                        <p className='font-semibold'>General team</p>
                    </div>
                    <MdKeyboardArrowDown className='text-gray-400'/>
                </div>
                <div className='mt-6 px-6'>
                    <p className='px-8 mb-2 underline underline-offset-8 font-semibold text-lg text-indigo-700'>History</p>
                    <div className='border-b border-gray-300'></div>
                    <p className='font-medium font-poppins text-gray-400 my-4'>November 20,2023</p>
                    <div className='mx-4 p-4 border border-gray-100 rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <img src={Jaklen} className='w-8 h-8 rounded-full mx-auto'/>
                                <span className='font-semibold font-poppins capitalize'>Tom Swift</span>
                            </div>
                            <BsThreeDotsVertical className='text-lg text-gray-400'/>
                        </div>
                        <div className='flex items-center gap-2 mt-3'>
                            <FiPhoneOff className='text-red-500'/>
                            <span className='font-poppins capitalize text-sm'>Missed call from Tom</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
