import React from 'react'
import BlogCard from './BlogCard'
// import Dashboard from './Dashboard'
import Bloge from './Dummy'
export default function Blogs() {
  let datew = [Bloge , Bloge , Bloge, Bloge ,Bloge , Bloge , Bloge, Bloge , Bloge,  Bloge , Bloge, Bloge , Bloge]
  console.log(datew)
    // console.log(Bloge)
  return (
    <div className=''>
<header><h1 className='text-center text-white bg-[#1a2835] py-4 font-bold font-poppins text-2xl'>Blogs</h1></header>
<div className='flex flex-wrap justify-start bg-blog-image bg-cover'>{datew.map((uef) => {return <BlogCard data={uef}></BlogCard>})}</div>
</div>
    
  )

}
