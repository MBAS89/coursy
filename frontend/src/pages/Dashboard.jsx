import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";

import { GiTrophyCup } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
export const Dashboard = () => {
    return (
    <div>
        <section className='bg-pink-300 h-20'></section>
        <section className='flex'>
            <section className='w-[20%] bg-black'>
                <div className="flex h-screen flex-col pl-8 py-6 bg-blue-200">
                    <div className='text-4xl text-white'>Logo</div>
                    <ul className="mt-6 space-y-1">
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg pl-4 py-2 font-medium flex items-center gap-3 border-r-8 border-white text-white text-2xl"><IoHomeOutline className='w-5 h-5'/> Home</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><PiBooks className='w-5 h-5'/> Courses</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><IoSettingsOutline className='w-5 h-5'/> Settings</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><TbDeviceDesktopAnalytics className='w-6 h-6'/> Analytics</Link>
                        </li>
                        <li>
                            <Link className="rounded-y-lg rounded-l-lg px-4 py-2 font-medium text-gray-500 hover:border-r-8 hover:border-white hover:text-white hover:text-2xl flex items-center gap-3 text-lg"><ImProfile className='w-5 h-5'/> Profile</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='w-[70%] bg-slate-50'>
                <div className='m-10 flex justify-between'>
                    <span className='text-2xl font-poppins font-medium'>Overview</span>
                    <span className='flex items-center gap-2 font-poppins font-medium'>This Week <span className='text-xs'><IoIosArrowDown /></span></span>
                </div>
                <div className='flex gap-2 mx-10'>
                    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-[25%] flex flex-col gap-6">
                        <div className='flex gap-5 '>
                            <span className="inline-block rounded bg-zinc-200 p-2 "><GiTrophyCup /></span>
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900 font-poppins">Score</h3>
                        </div>
                        <div>
                            <span className='font-poppins font-bold text-2xl'>40</span>
                            <p className=" line-clamp-3 text-sm/relaxed text-gray-500 font-poppins">reward points</p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-[25%] flex flex-col gap-6">
                        <div className='flex gap-5'>
                            <span className="inline-block rounded bg-zinc-200 p-2"><GrCertificate /></span>
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900 font-poppins">Certificates</h3>
                        </div>
                        <div>
                            <span className='font-poppins font-bold text-2xl'>1</span>
                            <p className=" line-clamp-3 text-sm/relaxed text-gray-500 font-poppins">Advanced courses</p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-100 bg-blue-200 p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-[50%] flex flex-col gap-6">
                        <div className='flex justify-between'>
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900">Advanced Learner</h3>
                            <span className="inline-block rounded bg-zinc-200 p-2"><PiStudent /></span>
                        </div>
                        <div>
                            <div className="my-2 line-clamp-3 text-sm/relaxed text-gray-500 flex justify-between items-center">
                                <span className='font-poppins font-medium text-lg'>Level 1</span>
                                <span className='text-gray-400'>3 courses,30 points to reach level 2</span>
                            </div>
                            <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-white w-full">
                                <ol className="relative z-10 flex justify-between text-sm font-medium text-pink-500">
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                    <li className="flex items-center gap-2 bg-white p-[2px]"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[25%]'>
                <div className='m-10 flex justify-between'>
                    <span className='font-poppins font-semibold text-lg'>Schedule</span>
                    <span className='text-sm text-blue-400'>View All</span>
                </div>
                <div className='flex items-center gap-10'>
                    <PiStudent />
                    <div>
                        <h3>Marketing</h3>
                        <span>8:00-9:20 | Mrs.Smith</span>
                    </div>
                    <IoIosArrowDropright />
                </div>
            </section>
        </section>
    </div>
  )
}
