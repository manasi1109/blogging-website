import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import eye from './images/eye.gif'
import './Scroll.css'

export default function Home() {

  function whereCount(){}

  return (
      <div className='bg-[#f5f8ff]'>
            <header><h1 className='text-center text-white bg-[#1a2835] py-4 font-bold font-poppins text-2xl'>Dashboard</h1></header>
          <div className='px-5 py-5 flex justify-evenly'>
              <div className='w-72 h-48 bg-[#f0eefc] m-2 rounded-l-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
              <h1 className='font-montserrat font-semibold text-base flex justify-center pt-2'>Highest Viewed Blog</h1>
                <div className='flex justify-evenly'>
                <img src={eye} alt="" className='w-28 h-28'/>
                <h1 className='mt-10 text-4xl font-overlock text-green-700'>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div>
            {isVisible ? <CountUp end={246}  duration="3" /> : 246}
          </div>
        )}
      </VisibilitySensor> </h1>
                </div>
               <div className='flex justify-end mr-2'> <Link to="blog"> <button className='rounded-md shadow-[#fdeef3] shadow-md p-1.5 m-1 hover:border-blue-300 bg-[#14b4a3]' onClick={() => {}}><p className='text-sm font-overlock text-white'>View Blogs</p></button></Link> </div>
            
              </div>
              <div className='w-72 h-48 bg-[#f2fef3] m-2 rounded-r-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
               <h1 className='font-montserrat font-semibold text-base flex justify-center pt-2'>Highest Liked Blog</h1>
                <div className='flex justify-evenly'>
                <img src="https://images.squarespace-cdn.com/content/v1/585a4892bebafba69928fcd7/1551693041930-KAWJHKMF2CCPKERTLLXW/Heart_Hole_STICKER.gif" alt="" className='w-28 h-28'/>
                <h1 className='mt-10 text-4xl font-overlock text-green-700'>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div>
            {isVisible ? <CountUp end={246}  duration="3" /> : 246}
          </div>
        )}
      </VisibilitySensor> </h1>
                </div>
               <div className='flex justify-end mr-2'> <Link to="blog"> <button className='rounded-md shadow-[#fdeef3] shadow-md p-1.5 m-1 hover:border-blue-300 bg-[#14b4a3]' onClick={() => {}}><p className='text-sm font-overlock text-white'>View Blogs</p></button></Link> </div>
              </div>
              </div>
              <div className='px-5 py-5 flex justify-evenly'>

              <div className='w-72 h-48 bg-[#fdeef3] border-white m-2 rounded-l-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
              <h1 className='font-montserrat font-semibold text-base flex justify-center pt-2'>Categories List</h1>
                <div className='flex justify-evenly m-4 '>
                <img src="https://cdn-icons-png.flaticon.com/512/718/718970.png" alt="" className='w-16 h-16 mt-2'/>
              
                <div className='child h-20 w-24 text-xs font-overlock font-extrabold'>
            <option>Fashion</option>
            <option>Space</option>
            <option>Travel</option>
            <option>Fashion</option>
            <option>Space</option>
            <option>Travel</option>
            <option>Space</option>
            <option>Travel</option>
            </div>
            
                </div>
               <div className='flex justify-end mr-2'> <Link to="categories"> <button className='rounded-md shadow-[#fdeef3] shadow-md p-1.5 m-1 hover:border-blue-300 bg-[#14b4a3]' onClick={() => {}}><p className='text-sm font-overlock text-white'>Go to Categories</p></button></Link> </div>
           
              </div>
              <div className='w-72 h-48 bg-[#fff7e2] border-white m-2 rounded-r-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
              <h1 className='font-montserrat font-semibold text-base flex justify-center pt-2'>Authors List</h1>
              <div className='flex justify-evenly m-4'>
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170170.png" alt="" className='w-16 h-16 mt-2'/>
                <div className=' child overflow-y-scroll h-20 w-24 text-xs font-overlock font-extrabold'>
            <option>Waffle Cake</option>
            <option>Levin Spacey</option>
            <option>Arka Sola</option>
            <option>Levin Spacey</option>
            <option>Levin Spacey</option>
            </div>
                </div>
               <div className='flex justify-end mr-2'> <Link to="authors"> <button className='rounded-md shadow-[#fdeef3] shadow-md p-1.5 m-1 hover:border-blue-300 bg-[#14b4a3]' onClick={() => {}}><p className='text-sm font-overlock text-white'>Check out Authors</p></button></Link> </div>
              </div>
          </div>
      </div>
  )
}
