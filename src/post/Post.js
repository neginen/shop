import React from 'react'
import img42 from "../image/49.jpg";
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <>
            <span className="relative flex justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-rose-700 to-transparent opacity-75"></div>
                <span className="relative z-10 md:text-2xl bg-white font-bold text-rose-700 px-6">درباره ما</span>
            </span>
            <div className="mx-auto  max-w-screen-md px-4 py-8 sm:px-6 lg:px-8 ">
                <div className="grid   grid-cols-2 items-center gap-8 bg-stone-200/75 ">
                    <div className="  p-6 text-center">
                        <h2 className=" text-sm sm:text-base md:text-lg font-semibold text-gray-900  ">
                        لورم ایپسوم متن  
                        </h2>

                        <p className="text-sm sm:text-base  mt-4 md:text-md line-clamp-3  text-gray-700 md:line-clamp-4 ">
                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                        </p>
                        <div className='flex gap-8  mt-8  justify-center'>
                            <span>  <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </Link>
                            </span>
                            <span>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </Link>
                            </span>
                            <span>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className='h-full '>
                        <img
                            src={img42}
                            className=" w-full h-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
