import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import AppContext from './context/AppContext';
import Blogs from './Components/Blogs';
import BlogView from './Components/BlogView';

export default function App() {
  let cont = useContext(AppContext)
  let isLogin = cont.stater
  console.log(isLogin);
  return (
    <div>
      <Routes>
        { isLogin? <Route path='/' element={<Dashboard/>}> <Route path='blog' element={<Blogs/>}></Route>
        <Route path='/blog/blogview' element={<BlogView/>}></Route></Route> : <Route path='/' element={<Dashboard/>}>
        <Route path='blog' element={<Blogs/>}></Route>
        <Route path='/blog/blogview' element={<BlogView/>}></Route>
          
        </Route> }
        
        <Route path='/login' element={<Login/>}>
        </Route>
     
      </Routes>
    </div>
  )
}
{/* <Route></Route> */}