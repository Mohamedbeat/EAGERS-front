import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

export default function Featured() {
    const [featured, setFeatured]=useState(null)
    
    const getFeatured= async ()=>{
        try {
            const res = await axios.get('http://192.168.100.7:7894/products?featured=true&limit=6') //192.168.100.7
            setFeatured(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getFeatured()
    },[])
    console.log(featured);
  return (
    <div className='sm:flex sm:flex-col sm:items-center '>
        <div className="sm:w-[100%] sm:max-w-[1024px] flex flex-col items-center sm:mt-[20px]">
        <h1 className='sm:text-[50px] text-[20px] font-bold ' id='featured'>
            Featured Items
        </h1>
        <div className='flex flex-col items-center justify-between gap-1
        sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-7
        sm:mt-5
        '> 
        {featured && featured.map((item)=>(
            
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
                                
                                    <h1 className='sm:flex-1'><b>{item.name}</b></h1>
                                    <h2 className='sm:flex-1'>Brand: {item.brand}</h2>
                                    <h3 className='sm:flex-1'>Price: <b>{item.price} DZ</b></h3> 
                                    <Link to={`/product/${item._id}`} className='sm:mx-auto w-[100%] sm:text-[20px] sm:mt-0 sm:flex-1 
                                    flex items-center justify-center
                                    '>
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
    </div>
  )
}
