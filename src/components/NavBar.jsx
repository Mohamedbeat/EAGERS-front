import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'

export default function NavBar({storagelength}) {
    const list = useRef()
    const handleClick=()=>{
       
        if (list.current.classList.contains('top-9')) { 
            list.current.classList.remove('top-9')
            list.current.classList.add('top-[-140px]')
            list.current.classList.remove('opacity-100')
            list.current.classList.add('opacity-0')
        }else{
            list.current.classList.remove('top-[-140px]') 
            list.current.classList.add('top-9')
            list.current.classList.add('opacity-100')
            list.current.classList.remove('opacity-0')
        }
    }
    const navRef = useRef()
    const [navBg, setNavBg] = useState(false);
    const [color, setColor]= useState({
        text:'text-white',
        bg: 'bg-transparent'
    })
    
    // console.log(location.pathname.split('/')[1]);
    const changeNavBg = () =>
    {   
        if(location.pathname.split('/')[1]==='product' || location.pathname.split('/')[1]==='cart'){
            if(window.scrollY>=0){
                if(!navBg) {
                    setNavBg(true)
                    setColor({text: 'text-black', bg: 'bg-white'})
                    
                }
            }
        }else
        if(location.pathname==='/search'){
            if(window.scrollY>=20){
                if(!navBg) {
                    setNavBg(true)
                    setColor({text: 'text-black', bg: 'bg-white'})
                    
                }
            }else{
                if(navBg) {
                    setNavBg(false)
                    setColor({text: 'text-white', bg: 'bg-transparent'})
                    
                }
            }
        }else{
            if(window.scrollY>=571){
            if(!navBg) {
                setNavBg(true)
                setColor({text: 'text-black', bg: 'bg-white'})
                
            }
        }else{
            if(navBg) {
                setNavBg(false)
                setColor({text: 'text-white', bg: 'bg-transparent'})
                
            }
        }
        }
        
    }
    // console.log(location.pathname);
    window.addEventListener('scroll', changeNavBg);
    
  return ( 
    <div id='top' className={ `flex items-center justify-center sm:${color.text} ${color.bg} text-sm p-2 sm:fixed sm:w-[100%] z-10 shadow-md `} 
     onScroll={changeNavBg} ref={navRef}> 

        <div className=' flex justify-between w-[95%] m-0 relative font-semibold'>
            <div className=" relative flex-1 flex items-center sm:justify-around ga">
                <div><FontAwesomeIcon icon={faBars} onClick={handleClick} className='cursor-pointer text-left sm:hidden
                rounded-full hover:bg-gray-500 hover:bg-opacity-10 p-1 transition-all duration-200 text-[18px]
                ml-[10px] 
                '/>  
                <ul ref={list} className="
                 flex flex-col absolute top-[-140px] left-[-22px] transition-all duration-400 sm:duration-0 z-[100]
                 p-4 gap-2 rounded-md opacity-0
                bg-white sm:bg-opacity-0
                sm:flex sm:flex-row sm:static sm:gap-4 sm:z-[1]  sm:opacity-100 
                sm:text-[16px] 
                
                ">
                    {location.pathname !=='/' &&<li className='cursor-pointer sm:py-2 px-[14px] sm:px-3 sm:rounded-full transition-all 
                duration-200     hover:bg-gray-500 
                hover:bg-opacity-80' >
                    <Link to='/'>
                    Main
                    </Link>
                    </li> }
                    <li className='cursor-pointer sm:py-2 px-[14px] sm:px-3 sm:rounded-full transition-all 
                duration-200     hover:bg-gray-500 
                hover:bg-opacity-80' >   <a href="#">Featured</a>   </li> 
                    {location.pathname !== '/search' && <li className='cursor-pointer sm:py-2 px-[14px] sm:px-3 sm:rounded-full transition-all 
                duration-200     hover:bg-gray-500 sm:text-[20px]
                hover:bg-opacity-80'  ><Link to='/search'>
                     <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </Link></li> } 
                </ul>
                </div>
            </div>
            <h1 className='text-sm flex-[2] flex items-center justify-center 
            text-[16px]
            sm:text-[25px] sm:font-bold transition-all duration-400'>
                EAGERS
            </h1>
            <div className="flex items-center justify-around gap-2    
            sm:flex-1 sm:flex sm:items-center sm:justify-around">
                <button className='hidden transition-all duration-400 hover:bg-gray-500 
                hover:bg-opacity-80 sm:inline sm:border-2
                 sm:border-white sm:py-2 sm:px-3 sm:rounded-full  '>Login</button>
                <button className='hidden transition-all duration-400 hover:bg-gray-500 
                hover:bg-opacity-80 sm:inline sm:border-2
                 sm:border-white sm:py-2 sm:px-3 sm:rounded-full'>Register</button>
                <button className='transition-all duration-400 border-2 border-solid px-2 
                py-1 rounded-full hover:bg-gray-500 hover:bg-opacity-80 sm:hidden
                text-[10px]
                 '>Login/Register</button>
                 {  location.pathname.split('/')[1]==='cart' ? '' :
                 <>
                 <Link to='/cart'>
                <span><FontAwesomeIcon icon={faCartShopping} className='sm:text-[20px] text-[18px] cursor-pointer rounded-full 
                hover:bg-gray-500 hover:bg-opacity-80 p-1'/>
                {localStorage.getItem('cart')==='[]' ? ` (0)` : ` (${storagelength})`}
                </span>
                 </Link>
                 </> 

                 }
            </div>
        </div>
    </div>
  )
}
