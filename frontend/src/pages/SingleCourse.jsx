import React from 'react'
import { BsPlayBtn } from "react-icons/bs";
import Jaklen from '../assets/images/jaklen.jpg';
export const SingleCourse = () => {
  return (
    <div>
        <section className='bg-gradient-to-r from-cyan-700 to-white'>
            <div className='flex w-[80%] mx-auto relative top-20 bg-cyan-800 p-4'>
                <div className='w-[500px] h-72 bg-black'></div>
                <div className='ml-5'>
                    <h2 className='font-poppins font-semibold text-2xl text-gray-400 capitalize mt-14'>marketing:</h2>
                    <p className='font-poppins font-semibold text-2xl text-gray-200 capitalize'>course level: beginner</p>
                    <h1 className='font-black text-4xl font-poppins mt-3'>Find Your Style: Five Exercises to Unlock Your Creative Identity</h1>
                    
                    <div className='flex justify-start items-center gap-3 mt-3'>
                        <img src={Jaklen} className='w-12 h-12 rounded-full'/>
                        <span className='text-pink-400 font-bold capitalize font-playpen'>Jaklen smith</span>
                        <div className="rating w-24 h-5 items-center">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <section className='w-[80%] mx-auto mt-32'>
            <h1 className='text-left font-bold text-4xl capitalize mb-10 mt-20'>start your lessons</h1>
            <div className='w-[100%] font-poppins text-lg border-y-2 border-black px-7'>
                <div className='flex items-center justify-between mb-3 p-2 pt-7 cursor-pointer active:bg-cyan-800'>
                    <div className='flex items-center gap-3'>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>1-Introduction</p>
                    </div>
                    <span>1:40</span>
                </div>
                <div className='flex items-center justify-between mb-3 p-2 cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>2-How to find your style</p>
                    </div>
                    <span>2:20</span>
                </div>
                <div className='flex items-center justify-between mb-3 p-2 cursor-pointer'>
                    <div className='flex items-center gap-3 '>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>3-How to find your style</p>
                    </div>
                    <span>2:20</span>
                </div>
                <div className='flex items-center justify-between mb-3 p-2 cursor-pointer'>
                    <div className='flex items-center gap-3 '>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>4-How to find your style</p>
                    </div>
                    <span>2:20</span>
                </div>
                <div className='flex items-center justify-between mb-3 p-2 cursor-pointer'>
                    <div className='flex items-center gap-3 '>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>5-How to find your style</p>
                    </div>
                    <span>2:20</span>
                </div>
                <div className='flex items-center justify-between mb-3 p-2 cursor-pointer'>
                    <div className='flex items-center gap-3 '>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>6-How to find your style</p>
                    </div>
                    <span>2:20</span>
                </div>
                <div className='flex items-center justify-between mb-3 p-2 cursor-pointer '>
                    <div className='flex items-center gap-3 '>
                        <span className='text-2xl'><BsPlayBtn/></span>
                        <p>7-How to find your style</p>
                    </div>
                    <span>2:20</span>
                </div>
            </div>
        </section>
        <section className='w-[80%] mx-auto mt-14 mb-10 p-20 border border-slate-200 rounded-md bg-cyan-800'>
            <h1 className='text-left font-bold text-4xl capitalize mb-5 text-white'>What you'll learn from this course:</h1>
            <ol className='text-gray-300 list-disc'>
                <li className='font-light capitalize font-poppins text-xl'>You will master the Python programming language by building 100 unique projects over 100 days.</li>
                <li className='font-light capitalize font-poppins text-xl'>You will be able to program in Python professionally.</li>
                <li className='font-light capitalize font-poppins text-xl'>Create a portfolio of 100 Python projects to apply for developer jobs.</li>
            </ol>
            <h1 className='text-left font-bold text-4xl capitalize mb-5 mt-5 text-white'>What you can do after learning this course:</h1>
            <ul className='text-gray-300 list-disc'>
                <li className='font-light capitalize font-poppins text-xl'>Start your Blog</li>
                <li className='font-light capitalize font-poppins text-xl'>Apply for a job</li>
                <li className='font-light capitalize font-poppins text-xl'>Begin delving into a broad and comprehensive study in the field and perhaps specialize in the future</li>
            </ul>
        </section>
        <section className='w-[80%] mx-auto mt-14 mb-10 p-20 '>
            <h1 className='text-center font-bold text-4xl capitalize mb-10'>Reviews about the lesson</h1>
            <div className='flex gap-10'>
                <div className='p-7 text-center rounded-lg shadow-2xl bg-white '>
                    <img src={Jaklen} className='w-12 h-12 rounded-full mx-auto'/>
                    <h1 className='text-pink-400 font-bold capitalize font-playpen'>loren mosarte</h1>
                    <div className="rating w-24 h-5 items-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <span className='font-bold capitalize font-playpen'>posted 1 month ago</span>
                </div>
                <div className='p-7 text-center rounded-lg shadow-2xl bg-white'>
                    <img src={Jaklen} className='w-12 h-12 rounded-full mx-auto'/>
                    <h1 className='text-pink-400 font-bold capitalize font-playpen'>loren mosarte</h1>
                    <div className="rating w-24 h-5 items-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <span className='font-bold capitalize font-playpen'>posted 1 month ago</span>
                </div>
                <div className='p-7 text-center rounded-lg shadow-2xl bg-white'>
                    <img src={Jaklen} className='w-12 h-12 rounded-full mx-auto'/>
                    <h1 className='text-pink-400 font-bold capitalize font-playpen'>loren mosarte</h1>
                    <div className="rating w-24 h-5 items-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <span className='font-bold capitalize font-playpen'>posted 1 month ago</span>
                </div>
            </div>
        </section>
    </div>
  )
}
