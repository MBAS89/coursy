import React from 'react'

import { RiVideoUploadLine } from "react-icons/ri";
import { MdFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Coursesupload = () => {
    return (
    <div>
        <div className='mx-auto w-[50%]'>
            <h1 className='mt-7 mb-10 font-bold text-2xl'>Make your class</h1>
            <h3 className='font-poppins text-medium mb-3'>Class title</h3>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <h3 className='mt-10 mb-3 font-poppins text-medium'>Class description</h3>
            <textarea className="textarea textarea-bordered w-full h-40" placeholder="Bio"></textarea>
            <h3 className='mt-10 mb-3 font-poppins text-medium'>Video of your class</h3>
            <div className='h-96 w-full border-dotted border-2 border-black flex flex-col items-center justify-center gap-3'>
                <RiVideoUploadLine className='text-5xl'/>
                <p className='font-bold text-xl'>Select video file</p>
                <p className='font-poppins font-medium w-52'>minimum 10GB.preferred format is MP4 or WEBM</p>
                <div className='flex gap-1'>
                    <Link className="inline-block border border-black px-4 py-3 font-bold focus:outline-none focus:ring w-44">
                        Drag and drop or
                    </Link>
                    <Link className="border border-black px-4 py-3 font-bold focus:outline-none focus:ring flex items-center gap-3 w-44">
                        <MdFileUpload className='text-lg'/> Select a file
                    </Link>
                </div>
            </div>
            <p className='font-poppins font-medium mt-10 mb-3'>Category</p>
            <select className="select select-bordered w-full max-w-xs mb-10">
                <option disabled selected>Choose Category ?</option>
                <option>Marketing</option>
                <option>Programming</option>
            </select>
            <p className='font-poppins font-medium mb-3'>Level</p>
            <select className="select select-bordered w-full max-w-xs mb-10">
                <option disabled selected>Choose Level ?</option>
                <option>Beginner</option>
                <option>Intermediate</option>
            </select>
            <p className='font-poppins font-medium mb-3'>Project description</p>
            <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder=""></textarea>
            <button className="btn block btn-sm mb-10">Attach a file</button>
            <div className='flex gap-5'>
                <button className="btn btn-outline">Save draft</button>
                <button className="btn btn-outline btn-accent">Submit</button>
            </div>
            <p className='font-poppins font-medium mt-3'>Saved at 8:00 PM</p>
            
        </div>
    </div>
  )
}
