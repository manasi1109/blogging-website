import React , {useContext , useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import "../Components/BlogCard.css"
import Bloge from './Schema'
import Popup from 'reactjs-popup';
import "./Modal.css";
import AppContext from '../context/AppContext'



export default function Categories(props) {
  let context = useContext(AppContext);
  console.log(Bloge);
  let schema = props.data;

  return (
    <div className='bg-blog-image bg-cover'>
<header><h1 className='text-center text-white bg-[#1a2835] py-4 font-bold font-poppins text-2xl'>Categories</h1></header>
<div className='bg-linen h-14 border-y-2 border-[#14ac9c]'>
  <div className='flex justify-between'>
<div className='flex justify-start p-2.5 mx-5'>
<input type="text" placeholder='Category' className='bg-linen border-gray-400 border-2 placeholder:text-sm h-8 placeholder:px-1'></input>&nbsp;&nbsp;
<button className='border-2 rounded-md border-gray-500 px-4 py-0.5 hover:border-blue-300 bg-[#14b4a3]'><p className='text-sm font-overlock text-white'>Search</p></button>

</div>
<div className='flex justify-end mt-3'>

<Popup
   trigger={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black right-7 cursor-pointer">
   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
 </svg>} className=""
    modal
    nested
  >
    {close => (
      <div className="modal shadow-lg shadow-gray-400/60 ">
      <button className="close" onClick={close}>
         <div className='mb-0.5 font-semibold'> &times;</div>
        </button>
        <div className="header font-montserrat font-semibold text-sm text-center"> Add Category</div>
       
        <div className="actions flex justify-between">
        <input type="text" placeholder='Category' className='rounded-md border-gray-400 border-2 placeholder:text-sm h-8 placeholder:px-1'></input>&nbsp;&nbsp;
        <button
            className="button bg-[#42c6b9] px-5 py-2 rounded shadow-lg shadow-green-900/80"
            onClick={() => {
              
            }}
          >
          Add
          </button>
  
        </div>
      </div>
    )}

  </Popup> 
 <Popup
   trigger={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black cursor-pointer">
   <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
 </svg> } className=""
    modal
    nested
  >
    {close => (
      <div className="modal shadow-lg shadow-gray-400/60">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content font-montserrat text-sm font-semibold text-center">
          Do you want to delete the Category ?
        </div>
        <div className="actions flex justify-evenly flex-wrap">
        
        <button
            className="button bg-[#42c6b9] px-5 py-2 rounded shadow-lg shadow-green-900/80"
            onClick={() => {
              
            }}
          >
          <div className='text-black drop-shadow-md'>Yes</div>
          </button>
          <button
            className="button bg-[#42c6b9] px-5 py-2 rounded shadow-lg shadow-green-900/80"
            onClick={() => {
              close();
            }}
          >
           <div className='text-black drop-shadow-md'>No</div>
          </button>
        </div>
      </div>
    )}

  </Popup>
</div>
</div>
</div>
<div className='flex flex-wrap justify-start '>{Bloge.BLOG.map((schema) => {return (


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
)})}
</div>
</div>
    
  )

}


