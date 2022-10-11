import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import AppContext from './context/AppContext';

export default function App() {
  let cont = useContext(AppContext)
  let isLogin = cont.stater
  console.log(isLogin);
  return (
    <div>
      <Routes>
        { isLogin? <Route index element={<Dashboard/>}></Route> : <Route index element={<Login/>}></Route> }
        
        
     
      </Routes>
    </div>
  )
}
{/* <Route></Route> */}