import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {
    const [credentials, setCredentials]= useState({
        username:undefined,
        password:undefined,
    })
    const [error, setError]=useState(null)
    const handleChange =(e)=>{
        setCredentials(prev=>({...prev, [e.target.id] : e.target.value}));
        console.log(credentials);
    }
    const login =async()=>{
        try {
            const res = await axios.post("http://192.168.100.7:7894/auth/login" , credentials ,{withCredentials:true})
            console.log(res);
        } catch (error) {
            console.log(error);
            // setError(error)
        }
    }
  return (
    <div className='relative overflow-hidden w-[100vw] h-[100vh] ' >
        <img className='absolute top-0 left-0 w-[100%] z-[-1] h-auto object-cover '  
         src="http://192.168.100.7:5173/src/images/login.jpg" alt="" />
    <div className='flex flex-col items-center justify-center '>
        <input type="text" placeholder='username' id='username' onChange={e=>handleChange(e)} />
        <input type="text" placeholder='password' id='password' onChange={e=>handleChange(e)}/>
        <button onClick={login} >Login</button>
        <span>{error && error.message}</span>
    </div>
    </div>
  )
}
