import React from 'react'
import blog_logo from "./blog.png"

export default function Dashboard() {
  return (
    <div>
      
            <aside>
                <ul>
            <li><h1 className=''><img src={blog_logo} alt=""/></h1></li>
       
                <li>Home</li>
                <li>Blogs</li>
                <li>Categories</li>
                <li>Authors</li>
            </ul>
            </aside>
            <main>
            <header>
              
                {/* <!-- Header Buttons --> */}
                <div className="buttons-header">
                    
                </div>
            </header>
            </main>
    </div>
  )
}
