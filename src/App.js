import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import AppContext from './context/AppContext';
import Blogs from './Components/Blogs';
import BlogView from './Components/BlogView';
import Create from './Components/Create';
import Categories from './Components/Categories';
import Authors from './Components/Authors';

export default function App() {
  let cont = useContext(AppContext)
  let isLogin = cont.stater
  console.log(isLogin);
  return (
    <div>
      <Routes>
      

        { isLogin? <Route path='/' element={<Dashboard/>}> <Route path="create" element={<Create/>}></Route> <Route path='blog' element={<Blogs/>}> </Route> <Route path='categories' element={<Categories/>}></Route> <Route path='authors' element={<Authors/>}></Route>
        <Route path='/blog/blogview' element={<BlogView/>}></Route></Route> : <Route path='/' element={<Dashboard/>}> <Route path='/login' element={<Login/>}></Route>
        <Route path='blog' element={<Blogs/>}></Route>
        <Route path='/blog/blogview' element={<BlogView/>}></Route>
          
        </Route> }
        
       
     
      </Routes>
    </div>
  )
}
{/* <Route></Route> */}