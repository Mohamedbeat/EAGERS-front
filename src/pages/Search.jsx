import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function Search() {
 
  const [product, setProduct]= useState({}) 
  const [products, setProducts]= useState(null) 
  
  const handleChange = (e)=>{
    setProduct(prev => ({
      ...prev,
      [e.target.name]: e.target.value ,
    }));
  }
  const handleClick = async()=>{
     
  
    try {
      // const res = await axios.patch(`http://192.168.100.7:7894/products?brand=${product.brand}&category=${product.category}&name=${product.name}&min=${product.min}&max=${product.max}`)
      const res = await axios.patch(`http://127.0.0.1:7894/products?brand=${product.brand || ""}&min=${product.min || 1}&max=${product.max || 9999999}&name=${product.name || ""}&category=${product.category || ""}`)
      console.log(res);
      setProducts(res.data)
    } catch (error) {
      console.log(error);
    }
  }


  
const location = useLocation().state

const getCat = async()=>{
  try{
    // const res = await axios.patch(`http://192.168.100.7:7894/products?brand=${product.brand}&category=${product.category}&name=${product.name}&min=${product.min}&max=${product.max}`)
    const res = await axios.patch(`http://192.168.100.7:7894/products?&category=${location || ""}`)
    console.log(res);
    setProducts(res.data)
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
    
  getCat()
  },[])
  const storagelength = JSON.parse(localStorage.getItem('cart')).length
  return (
    <div className=''>
        <NavBar storagelength={storagelength} />
        <div className='relative overflow-hidden p-'>
          <img className='w-[100%] h-[100%] absolute z-[-1] object-cover '
          src="http://192.168.100.7:5173/src/images/pexels-cup-of-couple-6956803.jpg" alt="" />
                <h1 className='p-3 text-white font-bold sm:text-[50px] sm:mt-[100px]'
                id='idd'>
                  Search:
                </h1>
            <div className='text-[12px] grid grid-cols-2 grid-rows-3 items-center justify-center 
            gap-3  p-3 
            sm:mt-[0px]'> 

                
                <div className="flex flex-col sm:items-center sm:justify-center">
                  
                  <input type="text"name='name' placeholder='Product name' className=' outline-none border-none p-1 rounded-md
                  sm:w-[80%] sm:px-2 sm:py-3 sm:font-bold sm:text-[18px] '
                   onChange={handleChange}/>
                </div>

                <div className="flex flex-col sm:items-center sm:justify-center">
                  
                  <input type="text" name='brand' placeholder='Brand' className=' outline-none border-none p-1 rounded-md
                  sm:w-[80%] sm:px-2 sm:py-3 sm:font-bold sm:text-[18px]' 
                  onChange={handleChange}/>
                </div>
            
                <div className="flex flex-col sm:items-center sm:justify-center">
                  
                  <input type="number" name='min' placeholder='Min' className=' outline-none border-none p-1 rounded-md
                  sm:w-[80%] sm:px-2 sm:py-3 sm:font-bold sm:text-[18px]' 
                  onChange={handleChange}/>
                </div>

                <div className="flex flex-col sm:items-center sm:justify-center">
                  
                  <input type="number" name='max' placeholder='Max' className=' outline-none border-none p-1 rounded-md
                  sm:w-[80%] sm:px-2 sm:py-3 sm:font-bold sm:text-[18px]' 
                  onChange={handleChange}/>
                </div>
              

              
                <div className=" flex flex-col sm:items-center sm:justify-center">   
                  
                  <input type="text" name='category' placeholder='Category' className=' outline-none border-none p-1 rounded-md
                  sm:w-[80%] sm:px-2 sm:py-3 sm:font-bold sm:text-[18px]' 
                  onChange={handleChange}/> 
                </div>
                 <div className='flex flex-col sm:items-center sm:justify-center'> 
                 
                  <button className=' bg-white text-black border border-[1px] border-black
                  cursor-pointer hover:bg-black hover:text-white transition-all duration-200
                  py-1 rounded-md font-bold sm:w-[80%] sm:px-2 sm:py-3 sm:font-bold sm:text-[18px]'
                  
                  onClick={handleClick}
                  ><FontAwesomeIcon icon={faSearch} /></button>
                 </div>
                     
                
              
                
                
            </div>
        </div>

        <div>
          {
            !products ? <h1 className='p-3'>Results will apear here</h1>
            :
            <>
            <div>
            <div className='flex flex-col items-center justify-between gap-1
        sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-7
        sm:mt-5
        '> 
        {products && products.map((item)=>(
            
            <div className='shadow-lg rounded-md w-[80%] h-[200px] text-[10px] flex flex-row-reverse
            items-center justify-center overflow-hidden p-3
            transition-all duration-200   
            sm:w-[30%] sm:h-[400px] sm:flex sm:flex-col sm:gap-5  sm:hover:translate-y-[-10px] 
' key={item._id}  >
                            <div className='overflow-hidden h-[90%]  flex-1 flex 
                            sm:w-[80%]
                            '> 
                                <img className='object-cover w-[100%] mx-auto '
                                src={item.picture} alt="" />
                            </div>

                            <div className=' flex-1 flex flex-col
                            sm:w-[80%] sm:text-[20px]
                            '>
                                
                                    <h1 className='sm:flex-1' ><b>{item.name}</b></h1>
                                    <h2 className='sm:flex-1'>Brand: {item.brand}</h2>
                                    <h3 className='sm:flex-1'>Price: <b>{item.price} DZ</b></h3> 
                                    <h3 className='sm:flex-1'>category: <b>{item.category} </b></h3> 
                                    <Link to={`/product/${item._id}`} className='sm:mx-auto w-[100%] sm:text-[20px] sm:mt-0 sm:flex-1 
                                    flex items-center justify-center '>

                                    <button className='mt-3 border border-1 border-black 
                                    w-[80%] rounded-md font-bold text-[12px] py-1 transition-all duration-200
                                    hover:bg-black hover:text-white
                                    
                                    sm:mx-auto sm:text-[20px] sm:border-[2px] sm:mt-0 sm:flex-1
                                    '                                    
                                >See More</button>
                                    </Link>
                                
                            </div>
                                  
            </div>
        
        )) }
        </div>
            </div>
            </>
          }
        </div>
        <Footer />

    </div>
  )
}
