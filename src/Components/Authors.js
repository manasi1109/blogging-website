import React from 'react'
import Bloge from './Schema'
import Popup from 'reactjs-popup';
import BlogCard from './BlogCard';
import "../Components/BlogCard.css"
import "./Modal.css";

export default function Authors() {
  return (
    <div>
        <div className='bg-blog-image bg-cover'>
<header><h1 className='text-center text-white bg-[#1a2835] py-4 font-bold font-poppins text-2xl'>Authors</h1></header>
<div className='bg-linen h-14 border-y-2 border-[#14ac9c]'>
  <div className='flex justify-between'>
<div className='flex justify-start p-2.5 mx-5'>
<input type="text" placeholder='Author' className='bg-linen border-gray-400 border-2 placeholder:text-sm h-8 placeholder:px-1'></input>&nbsp;&nbsp;
<button className='border-2 rounded-md border-gray-500 px-4 py-0.5 hover:border-blue-300 bg-[#14b4a3]'><p className='text-sm font-overlock text-white'>Search</p></button>

</div>
<div className='flex justify-end mt-3'>

<Popup
   trigger={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black right-7 cursor-pointer">
   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg> } className=""
    modal
    nested
  >
    {close => (
      <div className="modal shadow-lg shadow-gray-400/60 ">
      <button className="close" onClick={close}>
         <div className='mb-0.5 font-semibold'> &times;</div>
        </button>
        <div className="header font-montserrat font-semibold text-sm text-center"> Add Author</div>
       
        <div className="actions flex justify-between">
        <input type="text" placeholder='Author' className='rounded-md border-gray-400 border-2 placeholder:text-sm h-8 placeholder:px-1'></input>&nbsp;&nbsp;
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
          Do you want to delete the Author ?
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
     <BlogCard data={schema}></BlogCard>
)})}
</div>
</div>
       
    </div>
  )
}
