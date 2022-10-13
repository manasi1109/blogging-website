import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'

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

    <div>
      <form>
  <input type="email" autoComplete="on" onChange={(event)=>{setEmail(event.target.value)}}/>
  <input type="password" autoComplete="on" onChange={(event)=>{setPassword(event.target.value)}}/>
 <Link to="/"> <button onClick={() => {isLoggedIn()}} type="submit">Log In</button> </Link>
  </form>
    </div>
  )
}
