import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const [products, setProducts] = useState([])
    const [total, setTotal]=useState(0)
    const getCartItems = ()=>{
        const Citems = JSON.parse(localStorage.getItem('cart'))
        console.log(Citems);
        setProducts(Citems);
        const t = 0;
        // for (let i = 0; i < Citems.length; i++) {
        //  (Citems[i].count * Citems[i].unitPrice)
        
        // }
        setTotal((Citems.reduce((a,v) =>  a = a + v.unitPrice , 0 )))
        
}   
    useEffect(()=>{
        getCartItems() 
    },[])

    const removeFrmCart =(id, index)=>{
        const localstore = JSON.parse(localStorage.getItem('cart'))
        console.log(localstore);
        console.log(index);
        localstore.splice(index, 1)
        console.log(localstore);
        products.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(localstore))
       window.location.reload()  
    }
    const naigate = useNavigate()
    const handleClick =()=>{
        localStorage.setItem('cart','[]')
        setProducts([])
        naigate('/')
    }
   
    
  return (
    <div>
        <NavBar />
        <div className=''>
            <h1 className='p-3 text-black font-bold sm:text-[50px] sm:pt-[100px] 
            sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-3'>Cart:</h1>
{
    products.map((prod,index)=>(
        <div className='shadow-lg  sm:shadow-lg flex flex-row items-center justify-between sm:text-[30px] sm:w-[100%] sm:max-w-[1024px] 
                sm:mx-auto sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:mt-[20px]'
                key={prod._id}> 
                    <div className=' w-[100%] h-[100%] sm:max-h-[70vh] sm:w-[80%] overflow-hidden flex-[5] sm:flex sm:items-center sm:justify-center'> 
                        <img className='w-[100%] h-[100%] object-cover z-[-1] sm:mx-auto' 
                        src={prod.picture} alt="" /> 
                    </div>
                    <div className='flex flex-col gap-2 items-start justify-center flex-[2] p-1'> 
                        Product Infos
                        <div className='text-[12px] w-[100%] sm:text-[20px]'>
                            {prod.name}
                        </div>
                        <div className='text-[12px] w-[100%] sm:text-[20px]'>
                        {prod.brand}
                        </div>
                        <div className='text-[12px] w-[100%] sm:text-[20px]'>
                            <label htmlFor="">Size: {prod.size} </label>
                            
                        </div>
                        <div className='text-[12px] w-[100%] text-center sm:text-[20px]'>
                            <b>Price x Count = {prod.unitPrice* prod.count} DZ</b>
                        </div>
                        <div className='flex flex-row items-center justify-evenly w-[100%] sm:text-[20px]'>
                                    <FontAwesomeIcon className='cursor-pointer'
                                    icon={faPlus} />  
                                    <span>{prod.count}</span>
                                    <FontAwesomeIcon className='cursor-pointer'
                                    icon={faMinus}  /> 
                        </div>
                        <div className='text-[12px] w-[100%] sm:text-[20px]'>
                            <button className='border-2 border-solid border-black rounded-md py-1 px-[10px] w-[100%]
                            transition-all duration-200 hover:text-white hover:bg-black
                            '
                            onClick={()=>removeFrmCart(prod._id,index)} 
                            >Remove from cart</button>
                            
                        </div>
        
                    </div>
                </div>
                    ))
}

            <span className='  sm:max-w-[1024px] sm:my-11 sm:w-[100%] sm:mx-auto text-center
            flex flex-col items-center justify-center'>{total === 0 ?  
            <>
            <h1 className='text-[50px] mx-auto'>Cart <br />is <br /> Empty</h1>
            <FontAwesomeIcon icon={faCartShopping} className='text-[50px] mx-auto'/>
            </>
             : <h1 className='text-[30px] sm:text-[50px] mx-auto'> 
                <b> Total: ${total}DZ </b> </h1>}
            </span>
                {total !== 0 &&<span className='  sm:max-w-[1024px] sm:my-11 sm:w-[100%] sm:mx-auto text-center
            flex flex-col items-center justify-center'>
                <StripeCheckout 
            name="EAGERS"
            image="https://avatars.githubusercontent.com/Mohamedbeat"
            description={`Your total is ${total}`}
            amount={total * 100}
            
            stripeKey={'pk_test_51Nl4hWDGgi8dHz6sq4vPmkhue387HJnNV09L8SNLCLd9rigAUMlFj5oHxhNHzxDWBK3e4cN8BVbq3xy4jAeddX2P009cUkfAF8'}
            key={'pk_test_51Nl4hWDGgi8dHz6sq4vPmkhue387HJnNV09L8SNLCLd9rigAUMlFj5oHxhNHzxDWBK3e4cN8BVbq3xy4jAeddX2P009cUkfAF8'}
            >
            <button className='border-2 border-solid border-black rounded-md py-1 px-[10px] w-[100%]
                            transition-all duration-200 hover:text-white hover:bg-black
                            '
                onClick={handleClick}            
            >CHECKOUT NOW</button>  
            </StripeCheckout>
                </span>}
        </div>
        <Footer />

    </div>
  )
}
