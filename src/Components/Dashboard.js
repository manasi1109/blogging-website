import React, { useState , useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import AppContext from '../context/AppContext'
import blog_logo from "./images/blog.png"
import blog_smol from "./images/blog_smol.png"
import "./Dashboard.css";

export default function Dashboard() {
    let context = useContext(AppContext);
    let [logState , uselogState] = useState(context.stater);
    function logOut() {
        context.setStater(false);
        localStorage.setItem('state',false);
    }
    function logIn() {
        context.setStater(true);
        localStorage.setItem('state',true);
    }
    return (
        <div>
    
            <aside className='sidebar'>
                <ul className='top-nav text-xs'>
                    {context.stater ? <Link to=""><li className='my-4'><img src={blog_logo} alt="" className='logo' /></li> </Link> : <Link to="blog"><li className='my-4'><img src={blog_logo} alt="" className='logo' /></li> </Link>}
                    {context.stater ? <Link to=""><li className='my-4'><img src={blog_smol} alt="" className='mobile_logo' /></li> </Link> : <Link to="blog"><li className='my-4'><img src={blog_smol} alt="" className='mobile_logo' /></li> </Link>}

                    <hr/><hr/>
                { context.stater ?  <li className='h-12 bg-gradient-to-r from-teal-500 to-midnightblue-500 rounded text-white my-1 px-3 hover:bg-white hover:text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg> 
                    <Link to="/">  <span className='san font-semibold text-sm'>Home</span></Link>
                    </li> : (<div></div>)}
                    <li  className='h-12 bg-gradient-to-r from-teal-500 to-midnightblue-500 rounded text-white my-1 px-3 hover:bg-white hover:text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                        <Link to="blog"><span className='san font-semibold text-sm'>Blogs</span></Link>
                    </li>
                    <li className='h-12 bg-gradient-to-r from-teal-500 to-midnightblue-500 rounded text-white my-1 px-3 hover:bg-white hover:text-black' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    <Link to="categories">    <span className='san font-semibold text-sm'>Categories</span></Link>
                    </li>
                    <li className='h-12 bg-gradient-to-r from-teal-500 to-midnightblue-500 rounded text-white my-1 px-3 hover:bg-white hover:text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <Link to="authors">  <span className='san font-semibold text-sm'>Authors</span></Link>
                    </li>
                    { context.stater ?  <Link to="/create"> <li className='h-12 bg-gradient-to-r from-teal-500 to-midnightblue-500 rounded text-white my-1 px-3 hover:bg-white hover:text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                        <span className='san font-semibold text-sm'>Create</span>
                    </li></Link> : (<div></div>)}
                </ul>
              { context.stater? <Link to="/login"> <p onClick={() => {logOut()}} className='text-linen hover:text-teal-500 flex'>Logout&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
</p></Link> :  <Link to="/login"> <p className='text-linen hover:text-teal-500 flex'>Login&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
</p></Link>}
            </aside>
            <main>
                <header>

                    <div className="buttons-header">
                    
                    </div>
                </header>
                <Outlet/>
            </main>
           
        </div>
    )
}
