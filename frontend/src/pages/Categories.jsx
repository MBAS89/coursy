import React from 'react'
import myImage from '../assets/images/uiux.jpg';
import jakImg from '../assets/images/jaklen.jpg';
import albert from '../assets/images/albert.jpg';

export const Categories = () => {
    return (
    <div className=' mt-14 w-[80%] mx-auto'>
        <div className="flex flex-wrap  justify-center items-center">
            <a href="#" className="group relative block w-[25%] h-full bg-black">
                <img alt="Developer"src={myImage} className="absolute inset-0 w-full h-full object-cover transition-opacity opacity-30 group-hover:opacity-75 "/>
                <div className='flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <p className="text-4xl font-bold uppercase text-center text-white ">marketing</p>
                </div>
                <div className="relative p-36 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">marketing</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-full bg-black">
                <img alt="Developer"src={albert} className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className='absolute bottom-5 left-16 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">podcaster</p>
                </div>
                <div className="relative p-36 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </a>
            <a href="#" className="group relative block w-[25%] h-full bg-black">
                <img alt="Developer"src={jakImg} className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className='absolute bottom-5 left-16 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">developer</p>
                </div>
                <div className="relative p-36 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">graphic design</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">UI/UX design</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">programming</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">film making</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="group relative block w-[25%] h-4/5 bg-black">
                <img alt="Developer"src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                <div className="relative p-2 sm:p-4 lg:p-6">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
                    <div className="mt-20 sm:mt-28 lg:mt-24">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>

















        

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div>

    </div>
  )
}
{/*min-h-screen  w-full mx-auto  */}