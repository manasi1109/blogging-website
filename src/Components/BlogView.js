import React , {useContext , useState , useEffect} from 'react'
import Bloge from './Dummy'
import "./Dashboard.css"
import AppContext from '../context/AppContext'
import { SocialIcon } from 'react-social-icons';
import heart from './images/heart.gif'
import Popup from 'reactjs-popup';
import "./Modal.css";
import EditMode from './EditMode';

export default function BlogView() {
    let context = useContext(AppContext);
    let [isClick, setClick] = useState(false);
    function myHeart(){
        setClick(!isClick);
    }
  return (
    <div className=''>
        
        <h1 className='text-center text-white bg-[#1a2835] py-4 font-bold font-poppins text-2xl'>{Bloge.title}</h1>  
            {/* <div className='border-solid border-gray-300 rounded-lg h-screen border-2 my-10 mx-10'> */}
         <div>
         <div className="relative">
  <img src={Bloge.image} alt="BannerImage" className="absolute h-[70vh] lg:h-[80vh] w-full object-cover object-right opacity-25"/>
 
  <div className=" h-[70vh] lg:h-[80vh] w-full bg-gradient-to-b from-gray-400 via-black to-black">
  <h1 className='text-4xl text-white font-bold text-center pt-32 font-overlock'>{Bloge.title}</h1> 
 <h1 className='text-white font-sans text-center pt-4'>By {Bloge.Author}</h1>
<h1 className='text-white font-sans text-center'>{Bloge.CreatedAt}</h1> 

<div className='flex justify-end align-bottom m-1'>
{context.stater ? 
<Popup
   trigger={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white absolute bottom-0 my-2 right-7">
   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
 </svg>} className=""
    modal
    nested
  >
    {close => (
      <div className="modal shadow-lg shadow-gray-400/60 ">
      <button className="close" onClick={close}>
         <div className='mb-0.5 font-semibold'> &times;</div>
        </button>
        <div className="header font-montserrat font-semibold text-sm text-center"> Editor</div>
        <div className="content">
               <EditMode></EditMode>
        </div>
        <div className="actions">
        
        {/* <button
            className="button"
            onClick={() => {
              
            }}
          >
          Yes
          </button>
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
          No
          </button> */}
        </div>
      </div>
    )}

  </Popup> : (<div></div>)}
{context.stater ? <Popup
   trigger={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white absolute bottom-0 my-2">
   <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
 </svg> } className=""
    modal
    nested
  >
    {close => (
      <div className="modal shadow-lg shadow-gray-400/60">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content font-montserrat text-sm font-semibold text-center">
          Do you want to delete the Blog ?
        </div>
        <div className="actions flex justify-evenly flex-wrap">
        
        <button
            className="button bg-[#42c6b9] px-5 py-2 rounded shadow-lg shadow-green-900/80"
            onClick={() => {
              
            }}
          >
          <div className='text-white drop-shadow-md'>Yes</div>
          </button>
          <button
            className="button bg-[#42c6b9] px-5 py-2 rounded shadow-lg shadow-green-900/80"
            onClick={() => {
              close();
            }}
          >
          No
          </button>
        </div>
      </div>
    )}

  </Popup>: (<div></div>)}

</div>
    </div>
</div>

          
              {/* <p>{Bloge.summary}</p>   */}
              
                 {/* <h2>{Bloge.Likes}</h2> */}
                 <h2 className='text-justify px-10 py-10 border-2 border-[#ddd]-500 mx-10 my-10 font-montserrat text-sm font-medium'>{Bloge.Body}{Bloge.Body}{Bloge.Body}{Bloge.Body}{Bloge.Body}</h2>
                <div className='border-dotted border-t-2 border-gray-400'></div>
                 <div className=' py-2 '>
                 <div className=''>
                {isClick? <h1 className='text-sm'>Liked the blog?<img onClick={()=>{myHeart()}} src={heart} className="w-11 h-11 absolute z-10 -mt-1 ml-1"/></h1> : <h1 className='text-sm'>Liked the blog?<svg onClick={()=>{myHeart()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-500 font-extrabold mt-1.5 ml-3 absolute z-10 align-middle">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg></h1>}
                </div>
                <div className='text-right'>
                 <SocialIcon url="https://www.facebook.com/" style={{ height: 30, width: 30, margin: 5 }}/>
                 <SocialIcon url="https://twitter.com/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://www.instagram.com/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://telegram.org/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://behance.com" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://discord.com/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://youtube.com/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://reddit.org/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://whatsapp.org/" style={{ height: 30, width: 30, margin: 5  }}/>
                 <SocialIcon url="https://pinterest.org/" style={{ height: 30, width: 30, margin: 5  }}/>

                 </div>
                 </div>
                 <div className='border-dotted border-t-2 border-gray-400'></div>

                 
                 </div>
    </div>
  )
}
