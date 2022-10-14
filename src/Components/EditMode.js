import React from 'react'
import { useState , useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Reset.css'

export default function EditMode() {
   let [value, setValue] = useState('');

    function getME()
  {
    return {__html : value}
  }
  return (
    <div>
        <div>
     
     <div innerHtml={value} className="w-4 h-4"></div>
     
   <div style={{"width" : "100%"}}><ReactQuill theme="snow" value={value} onChange={setValue} />
   </div><div><button className='border-2 rounded-md border-red-300 p-2 hover:border-blue-300' onClick={() => {}}><p className='text-xs'>Submit</p></button></div>
   {/* <div ref={ref} id='test'></div> */}
   <div className='unreset' dangerouslySetInnerHTML={getME()}></div>
   </div>
        
    </div>
  )
}
