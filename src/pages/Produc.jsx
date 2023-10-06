import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Product() {
    const [count, setCount]=useState(1)
    const [prod, setProd]=useState({})
    const id =location.pathname.split('/')[2]
    const getProd = async()=>{
        try {
            const res = await axios.get(`http://192.168.100.7:7894/products/${id}`)
            setProd(res.data)
            console.log(res);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getProd()
    },[])
    const prod1 = {
        id:'dsfsfsdfs',
        name: 'product name',
        brand : 'product brand',
        size : ['S', 'M', 'L'],
        desc : 'product desc',
        price : 87,
        category : 'product category',
        picture : 'https://img.freepik.com/free-photo/shirt_1203-8194.jpg?size=626&ext=jpg',
    }

    const handleCount =(operaton)=>{
        if(operaton ==='+'){
            setCount(count+1)
        }else{
            if(count >1){
                setCount(count -1) 
            }
        }
    }
    const selectRef = useRef()

    const addToCart =()=>{
        const productCart = [{
            _id: prod._id,
            name:prod.name,
            brand:prod.brand,
            brand:prod.brand,
            size: selectRef.current.value,
            count: count,
            unitPrice: prod.price,
            picture: prod.picture 
        }]
        // console.log(productCart);
        // const prevLocalstorage =[]
        // console.log(JSON.parse(localStorage.getItem('cart'))===null);
        if (JSON.parse(localStorage.getItem('cart'))===null){
            localStorage.setItem("cart", JSON.stringify(productCart));
        }else{
            const prevLocalstorage=JSON.parse(localStorage.getItem('cart'))
            console.log(prevLocalstorage);
            prevLocalstorage.push(productCart[0])
            const newLocalStorage = prevLocalstorage
            console.log(newLocalStorage);
            localStorage.setItem("cart", JSON.stringify(newLocalStorage));
        }  
        // prevLocalstorage.push(localStorage.key('cart') && JSON.parse(localStorage.getItem('cart')) ); 
        // console.log(prevLocalstorage);
        // const newLocalStogare = prevLocalstorage.push(productCart)
        // localStorage.setItem("cart", JSON.stringify(newLocalStogare));
    }
    const storagelength = JSON.parse(localStorage.getItem('cart')).length
  return (
    <>
    
    <div className=''>
        <NavBar storagelength={storagelength}/>
    
    <div className=''>
        <h1 className='p-3 text-black font-bold sm:text-[50px] sm:pt-[100px]'
        >{prod?.name}</h1>
        
        <div className='flex flex-row items-center justify-between sm:text-[30px] sm:w-[100%] sm:max-w-[1024px] 
        sm:mx-auto sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-2'>
            <div className=' w-[100%] h-[100%] sm:max-h-[70vh] overflow-hidden flex-[5] sm:flex sm:items-center sm:justify-center'> 
                <img className='w-[100%] h-[100%] object-cover z-[-1]' 
                src={prod?.picture} alt="" /> 
            </div>
            <div className='flex flex-col gap-2 items-start justify-center flex-[2] p-1'> 
                Product Infos
                <div className='text-[12px] w-[100%] sm:text-[20px]'>
                    {prod?.name}
                </div>
                <div className='text-[12px] w-[100%] sm:text-[20px]'>
                    {prod?.brand}
                </div>
                <div className='text-[12px] w-[100%] sm:text-[20px]'>
                    {prod?.desc}
                </div>
                <div className='text-[12px] w-[100%] sm:text-[20px]'>
                    {prod?.category}
                </div>
                <div className='text-[12px] w-[100%] sm:text-[20px]'>
                    <label htmlFor="">Size: </label>
                    <select ref={selectRef} name="size" id="size" className='border-2 border-black border-solid rounded-md 
                    w-[50%] mx-auto sm:w-[40%]
                    '> 
                        {prod.size?.map(size=>(
                            <option value={size} key={size}>{size}</option>
                        ))}
                        
                    </select>
                </div>
                <div className='text-[12px] w-[100%] text-center sm:text-[20px]'>
                    <b>{prod?.price} DZ</b>
                </div>
                <div className='flex flex-row items-center justify-evenly w-[100%] sm:text-[20px]'>
                            <FontAwesomeIcon className='cursor-pointer'
                            icon={faPlus} onClick={()=>handleCount('+')}/>
                            <span>{count}</span>
                            <FontAwesomeIcon className='cursor-pointer'
                            icon={faMinus} onClick={()=>handleCount('-')} />
                </div>
                <div className='text-[12px] w-[100%] sm:text-[20px]'>
                    <Link to='/' >
                    <button className='border-2 border-solid border-black rounded-md py-1 px-[10px] w-[100%]
                    transition-all duration-200 hover:text-white hover:bg-black
                    '
                    onClick={addToCart}
                    >ADD TO CART</button>  
                    </Link>
                </div>

            </div>
        </div>
    </div>

        <Footer />
    </div>
    </>
    
  )
}
