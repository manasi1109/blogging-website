import React from 'react'
import { useState , useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Reset.css'
import './Create.css'

export default function Create() {
   let [value, setValue] = useState('');

    function getME()
  {
    return {__html : value}
  }
  return (
    <div  className='bg-[#faf7f3] bg-contain min-h-screen overflow-y-hidden'>
       
     
     <div innerHtml={value} className="w-4 h-4"></div>
     
   <div className='create mx-5 bg-white border-2'><ReactQuill theme="snow" value={value} onChange={setValue} />
   </div><div className='flex flex-col items-center'><button className='border-2 rounded-md border-gray-500 p-2 m-2 hover:border-blue-300 bg-[#14b4a3]' onClick={() => {}}><p className='text-sm font-overlock text-white'>Publish</p></button></div>
   {/* <div ref={ref} id='test'></div> */}
 
    </div>
    
  )
}
