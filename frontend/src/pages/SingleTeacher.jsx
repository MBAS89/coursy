import React ,{ useState} from 'react'
import Jaklen from '../assets/images/jaklen.jpg';
import uiux from '../assets/images/uiux.jpg';
import { Link } from 'react-router-dom';
import { BsBookmark } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";

export const SingleTeacher = () => {
    const [selectedCategory,setSelectedCategory] = useState('freeCourses')
    const categories = ['freeCourses', 'premiuimCourses', 'teacherPlan'];

    const data = {

        freeCourses:[
            {
                img:uiux,
                title:'Organic Expressive Florals With Watercolor and Ink',
                teachername:'jaklen smith',
                courseTime:'3hrs 30min'
            },
            {
                img:uiux,
                title:'Organic Expressive Florals With Watercolor and Ink',
                teachername:'jaklen abu wadee3',
                courseTime:'3hrs 30min'
            },
            {
                img:uiux,
                title:'Organic Expressive Florals With Watercolor and Ink',
                teachername:'jaklen xxxxx',
                courseTime:'3hrs 30min'
            },
        ],
        premiuimCourses:[
            {
                img:uiux,
                title:'Video for Instagram: Tell an Engaging Story in Less Than a Minute',
                teachername:'albert walker',
                courseTime:'10hrs'
            },{
                img:uiux,
                title:'Video for Instagram: Tell an Engaging Story in Less Than a Minute',
                teachername:'albert walker',
                courseTime:'10hrs'
            },{
                img:uiux,
                title:'Video for Instagram: Tell an Engaging Story in Less Than a Minute',
                teachername:'albert walker',
                courseTime:'10hrs'
            },
        ],
        teacherPlan:[
            {
                title:'Basic',
                subtitle:'most popular',
                feature1:'Access to 24,000+ top courses',
                feature2:'Access to 24,000+ top courses',
                feature3:'Access to 24,000+ top courses',
                feature4:'Access to 24,000+ top courses',
                feature5:'Access to 24,000+ top courses',
                feature6:'Access to 24,000+ top courses',
            },
            {
                title:'Professional',
                subtitle:'recommended',
                feature1:'Access to 24,000+ top courses',
                feature2:'Access to 24,000+ top courses',
                feature3:'Access to 24,000+ top courses',
                feature4:'Access to 24,000+ top courses',
                feature5:'Access to 24,000+ top courses',
                feature6:'Access to 24,000+ top courses',
            },
            {
                title:'Ultimate',
                subtitle:'best value',
                feature1:'Access to 24,000+ top courses',
                feature2:'Access to 24,000+ top courses',
                feature3:'Access to 24,000+ top courses',
                feature4:'Access to 24,000+ top courses',
                feature5:'Access to 24,000+ top courses',
                feature6:'Access to 24,000+ top courses',
            },

        ]

    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    
    return (
    <div>
        <section className='w-[60%] mx-auto mt-32'>
            <div className='flex items-center gap-7'>
                <div>
                    <img src={Jaklen} className='w-36 h-36 rounded-lg'/>
                </div>
                <div>
                    <h2 className='text-pink-400 font-bold capitalize font-playpen text-2xl'>jaklen smith</h2>
                    <div className="rating w-24 h-5 items-center">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p className='font-poppins mb-2'>sentence about me</p>
                    <div className='flex gap-3'>
                        <button className="btn btn-sm text-xs">follow</button>
                        <button className="btn btn-sm text-xs">chat</button>
                        <button className="btn btn-sm text-xs">live</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-[60%] mx-auto mt-10'>
            <h1 className='font-poppins font-semibold text-xl capitalize'>About Me</h1>
            <p className='font-semibold text-slate-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </section>
        <section>
            <h1 className='font-poppins font-semibold text-xl capitalize mt-10 w-[60%] mx-auto'>What I teach:</h1>
            <div className='flex gap-9 w-[60%] mx-auto mt-5 items-center'>
                <div className='flex flex-col items-center'>
                    <img width="64" height="64" src="https://img.icons8.com/dusk/64/commercial.png" alt="commercial" className='p-3 rounded-full bg-slate-200'/>
                    <span className='font-bold capitalize font-poppins'>marketing</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img width="64" height="64" src="https://img.icons8.com/dusk/64/web-design.png" alt="web-design" className='p-3 rounded-full bg-slate-200'/>
                    <span className='font-bold capitalize font-poppins'>programming</span>
                </div>
                <div className='flex flex-col items-center'>
                    <img width="64" height="64" src="https://img.icons8.com/dusk/64/code.png" alt="code" className='p-3 rounded-full bg-slate-200'/>
                    <span className='font-bold capitalize font-poppins'>ui/ux design</span>
                </div>
            </div>
        </section>
        <section className="w-[60%] h-[600px] mx-auto mt-16 mb-20">
            <div className="flex space-x-4">
                {categories.map((category) => (
                <button key={category} className={`${selectedCategory === category? 'bg-blue-500 text-white': 'bg-gray-200 text-gray-600'} px-4 py-2 rounded-md`} onClick={() => handleCategoryClick(category)}>
                    {category}
                </button>
                ))}
            </div>
            <div className="mt-5">
                {selectedCategory && (
                <div className=''>
                    <div className='flex flex-wrap w-[100%] h-[500px] mx-auto gap-5'>
                        {selectedCategory === "teacherPlan"? 
                         data[selectedCategory].map((item, index) => (  
                            <>
                                <div className={` ${index === 1 ? 'border border-indigo-600 ring-1 ring-indigo-600':'border border-gray-200'} rounded-2xl p-6 shadow-sm sm:order-last sm:px-8 lg:p-12 mt-5`}>
                                    <div className="text-center">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            {item.title}
                                            <span className="sr-only">{item.subtitle}</span>
                                        </h2>
                                        <p className="mt-2 sm:mt-4">
                                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">30$</strong>
                                            <span className="text-sm font-medium text-gray-700">/month</span>
                                        </p>
                                    </div>
                                    <ul className="mt-6 space-y-2">
                                        <li className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>
                                            <span className="text-gray-700">{item.feature1} </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>
                                            <span className="text-gray-700"> {item.feature2} </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>
                                            <span className="text-gray-700"> {item.feature3} </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>
                                            <span className="text-gray-700"> {item.feature4} </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>
                                            <span className="text-gray-700"> {item.feature5} </span>
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                            </svg>
                                            <span className="text-gray-700"> {item.feature6} </span>
                                        </li>
                                    </ul>
                                    <button className={`${index === 1 ? 'bg-white text-indigo-600 hover:ring-indigo-600':'bg-indigo-600 text-white hover:bg-indigo-700 hover:ring-indigo-700 '} mx-auto focus:outline-none focus:ring active:text-indigo-500 hover:ring-1 px-12 py-3 text-center text-sm font-medium mt-8 block rounded-full border border-indigo-600`}>
                                        Get Started
                                    </button>
                                </div>
                            </>
                        ))
                         : data[selectedCategory].map((item) => (
                            <Link className="card w-[280px] h-[350px] bg-base-100 shadow-xl m-5 mt-5">
                                <figure className='w-[280px]'><img src={item.img} alt="course img"/></figure>
                                <div className="card-body h-40">
                                    <p className='font-black leading-5 font-poppins -mt-3'>{item.title}</p>
                                    <div className="font-poppins text-sm">Course teacher <span className='text-pink-400 font-bold capitalize text-sm font-playpen'>{item.teachername}</span></div>
                                    <div className="card-actions justify-between items-center -mt-1">
                                        <div className="badge badge-outline font-poppins text-xs">{item.courseTime}</div> 
                                        <span className='bg-white p-2 rounded-full border-[1px] border-gray-500 border-solid'><BsBookmark className='text-sm'/></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                )}
            </div>
        </section>
    </div>
  )
}
