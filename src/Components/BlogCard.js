import React from 'react'
import { Link } from 'react-router-dom';
import "../Components/BlogCard.css"
export default function BlogCard(props) {
    console.log(props.data)
    let schema = props.data;
    return (
        <div className='w-1/2 lg:w-1/4'>
            <div className='px-5 py-5'>

                <div className='bg-linen shadow-2xl p-4 space-y-5'>
                    <p className='inline-block w-8 text-center bg-white opacity-70 text-xs py-1 font-semibold absolute mx-2 my-7 font-poppins'>{schema.CreatedAt}</p>
                    <img src={schema.Image} alt="" className=' w-full rounded-md' />
                    <div className='mt-10'> <h3 className='bg-[#08bd80] relative -mt-9 text-white font-medium font-poppins w-1/3 py-1 text-xs text-center border-white border-solid border-2 rounded block m-auto'>{schema.Category}</h3></div>
                   <div className='h-20'> <h1 className='text-center font-serif font-extrabold'>{schema.title}</h1> </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-wrap m-auto justify-end align-middle'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black-500 font-extrabold py-1 rounded-2xl bg-slate-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            <span><h3 className='text-xs pl-1 pt-0.5'>{schema.Author}</h3></span>
                        </div>
                    </div>
                   <Link to='blogview'> <p className='font-serif text-justify text-[13px] pt-2 truncate'>{schema.summary}</p></Link>
                  

                </div>
                <div className='flex flex-wrap justify-end bg-white align-middle'>
                    <span className='text-sm pt-0.5'>{schema.Likes}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500 font-extrabold py-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
