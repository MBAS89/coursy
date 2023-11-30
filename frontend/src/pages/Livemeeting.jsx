import React from 'react'
import { Link } from 'react-router-dom'
import Jaklen from '../assets/images/jaklen.jpg';

import { IoSettingsOutline } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { VscBellDot } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";

import { IoCameraReverseSharp } from "react-icons/io5";
export const Livemeeting = () => {
    return (
    <div>
        <div className='flex'>
            <section>
                <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
                    <div>
                        <div className="inline-flex h-16 w-16 items-center justify-center">
                            <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">L</span>
                        </div>
                        <div className="border-t border-gray-100">
                            <div className="px-2">
                                <div className="py-4">
                                    <Link to="" className="group relative flex justify-center rounded bg-blue-50 px-2 py-1.5">
                                        <IoSettingsOutline className='text-2xl'/>
                                        <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                            Settings
                                        </span>
                                    </Link>
                                </div>
                                <ul className="space-y-1 border-t border-gray-100 pt-4">
                                    <li>
                                        <Link to="" className="group relative flex justify-center rounded px-2 py-1.5 hover:bg-gray-50 text-blue-700">
                                            <MdOndemandVideo className='text-2xl' />
                                            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                                Live
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                            <RxDashboard className='text-2xl' />
                                            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                            <FaRegCalendarAlt className='text-2xl'/>
                                            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                                Calendar
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                            <FaRegBookmark className='text-2xl'/>
                                            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                                Save
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                        <form action="/logout">
                            <button type="submit" className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                                <BiLogOut className='text-2xl' />
                                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                    Logout
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <div className='w-[100%]'>
                <div className="h-16 w-full border-b-2 border-gray-100">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <h2 className='text-3xl font-bold mr-5'>Room Meeting</h2>
                        <div className="flex flex-1 items-center justify-end md:justify-between">
                            <span className="inline-flex items-center justify-center rounded-full bg-red-50 px-2.5 py-0.5 text-red-600">
                                <RxDotFilled className='text-red-600'/>
                                <p className="whitespace-nowrap text-sm font-medium text-red-600">Live Record</p>
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4 items-center">
                                    <GoSearch className='text-2xl'/>
                                    <VscBellDot className='text-2xl'/>
                                    <div className='flex items-center gap-4'>
                                        <img src={Jaklen} alt="course img" className='h-10 w-10 rounded-full'/>
                                        <div className='flex flex-col'>
                                            <span className='font-bold capitalize text-sm font-poppins'>dany holmes</span>
                                            <span className='text-xs font-poppins text-gray-400'>April24,2023</span>
                                        </div>
                                        <MdKeyboardArrowDown className='text-2xl'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex h-screen'>
                    <div className='w-[70%]'>
                        <div className='rounded-2xl mx-5 mt-5 w-[1250px] h-[500px] relative bg-purple-300'></div>
                        <span className='absolute top-24 left-28 flex items-center gap-1 rounded-full px-4 py-px text-white bg-zinc-800'><MdPerson /> Rose</span>
                        <div className='rounded-xl w-52 h-32 absolute top-24 left-[1100px] bg-yellow-300'></div>
                        <span className='absolute top-48 left-[1110px] flex items-center gap-1 rounded-full px-4 py-px text-white bg-zinc-800'>Me</span>
                        <ImPhoneHangUp className='absolute bottom-[380px] left-[800px] h-14 w-14 p-3 text-4xl text-white bg-green-500 rounded-full'/>
                        <FaMicrophone className='absolute bottom-[380px] left-[700px] h-14 w-14 p-3 text-4xl text-white bg-zinc-700 opacity-75 rounded-full'/>
                        <BsFillCameraFill className='absolute bottom-[380px] left-[600px] h-14 w-14 p-3 text-4xl text-white bg-zinc-700 opacity-75 rounded-full'/>
                        <IoCameraReverseSharp className='absolute bottom-[380px] left-[500px] h-14 w-14 p-3 text-4xl text-white bg-zinc-700 opacity-75 rounded-full'/>
                    </div>
                    <div className='w-[30%] bg-orange-300'>
                        <div className='mt-5 h-[840px] rounded-xl border-2 bg-pink-300 border-gray-300'>
                            <div className='flex justify-between border-b border-zinc-100'>
                                <h2 className=''>Live Chat</h2>
                                <span className='flex items-center gap-1 px-2 rounded-md border border-zinc-100'><span className='font-semibold'>Group</span><MdKeyboardArrowDown /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
            
        
    </div>
  )
}
