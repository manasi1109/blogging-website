import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'
import loginImage from "./images/Blog Post.jpg"

export default function Login() {
  let userName = "abc@gmail.com";
  let password = "123456"
  let apper = useContext(AppContext);
let[email,setEmail] = useState("");
let[pass,setPassword] = useState("")
let[login,setLogin] = useState(apper.stater)



  function isLoggedIn(){
    if (userName === email && password === pass){
      apper.setStater(true);
      
      setLogin(true)
    }
    else
    {
      window.alert("error")
    }
  }
  return (

    <div className='flex h-screen items-center justify-center'>
      <div className=' border-gray-300 border-2 bg-gradient-to-bl from-[#1a2835] to-[#767a7e]'>
      <img src={loginImage} className="w-96 h-96 opacity-50"/>
      </div>
      <form className='border-gray-300 border-t-2 border-r-2 border-b-2 w-96 h-96 grid items-center'>
    
        <div className='flex flex-col m-10 mt-10'>
  <input type="email" placeholder="Email" autoComplete="on" onChange={(event)=>{setEmail(event.target.value)}} className="border-2 border-gray-300 mb-6 p-2"/>
  <input type="password" placeholder="Password" autoComplete="on" onChange={(event)=>{setPassword(event.target.value)}} className="border-2 border-gray-300 mb-6 p-2"/> </div>
  <div className='flex justify-end mr-10 -mt-40'>
 <Link to="/"> <button onClick={() => {isLoggedIn();localStorage.setItem('state',true);}} type="submit" className='border-2 rounded-md border-gray-500 px-4 py-1.5 m-2 hover:border-blue-300 bg-[#14b4a3] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><p className='text-sm font-overlock text-white'>Log In</p></button> </Link>
</div>

  </form>
    </div>
  )
}
