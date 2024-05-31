import NavBar from '../components/NavBar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'

export default function Home() {
    // console.log(document.getElementById('ok').offsetTop);
const navigate = useNavigate()
    const handleCat =(type)=>{
        navigate("/search", {state: type})
    }
    const storagelength = JSON.parse(localStorage.getItem('cart')).length
  return (
    <div className=''>
        <NavBar type="home" storagelength={storagelength} />
        {/* Landind page */}
        <div>
            <div className='h-[27vh] sm:h-[100vh] w-[100%]  overflow-hidden relative z-[-3]'>
                <span className=' sm:absolute  sm:z-[1]  sm:top-[0vh] sm:left-[0%]  
                absolute z-[1] top-[0vh] left-[0%] backdrop-blur-[1px] sm:backdrop-blur-[2px] sm:backdrop-contrast-[100%] p-3 w-[100%]
                flex flex-col items-center justify-center sm:h-[50vh] h-[12vh]
                '>
                    <h1 className='sm:text-white sm:font-bold sm:text-[50px]
                    text-white font-bold text-[20px] 
                    '>
                        We can make your choices easier!
                    </h1>
                    <p className='sm:mt-[30px] sm:text-white sm:font-bold sm:text-[30px]
                    mt-[10px]   text-white font-bold text-[10px]
                    '>
                        Relax , you will find everything you like here.
                    </p>
                </span>
                <video className='sm:w-[100%] sm:h-[100%] object-cover absolute backdrop-brightness-[0%]' //blur-[0.5px] sm:blur-[1px]
                src='http://192.168.100.7:5173/src/videos/video(2160p).mp4' autoPlay={true} muted={true} loop={true}
                // src="./src/images/pexels-cup-of-couple-6956803.jpg" 
                alt="" />
                v
            </div>
        </div>
        <div id='ok'>

            {/* Categories */}
            <div className='sm:w-[100%] sm:max-w-[1024px] flex flex-col items-center sm:mt-[20px] mx-auto'>
                <h1 className='sm:text-[50px] text-[20px] font-bold mb-[10px] sm:mb-[20px] ' id='featured'>
                    Categories
                </h1>
            <div className='w-[100%] h-[100%] relative overflow-hidden grid grid-cols-2 grid-rows-2
            gap-3 p-4 sm:gap-4 sm:p-5
            items-center justify-center text-center text-white font-semibold
            sm:w-[100%] sm:h-[75vh]'>         
                <img className='absolute top-0 left-0 w-[100%] h-[100%] object-cover z-[-1] '
                src="https://images.pexels.com/photos/375892/pexels-photo-375892.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className='bg-gray-300 bg-opacity-0 w-[100%] h-[50px] flex items-center justify-center
                        cursor-pointer
                        transition-all duration-200 rounded-md hover:bg-opacity-20
                        sm:text-[30px] sm:h-[100%]' onClick={()=>handleCat('bussiness')}> 
                        <h1 >Bussiness</h1>
                
                        
                    </div>  
                    <div className='bg-gray-300 bg-opacity-0 w-[100%] h-[50px] flex items-center justify-center
                        cursor-pointer
                        transition-all duration-200 rounded-md hover:bg-opacity-20
                        sm:text-[30px] sm:h-[100%]' onClick={()=>handleCat('Sport')}>
                        <h1>Sport</h1>
                    </div>
                    <div className='bg-gray-300 bg-opacity-0 w-[100%] h-[50px] flex items-center justify-center
                        cursor-pointer
                        transition-all duration-200 rounded-md hover:bg-opacity-20
                        sm:text-[30px] sm:h-[100%]' onClick={()=>handleCat('Classic')}>
                        <h1>Classic</h1>
                    </div>
                    <div className='bg-gray-300 bg-opacity-0 w-[100%] h-[50px] flex items-center justify-center
                        cursor-pointer
                        transition-all duration-200 rounded-md hover:bg-opacity-20
                        sm:text-[30px] sm:h-[100%]' onClick={()=>handleCat('')}>
                        <h1>See All Categories</h1>
                    </div>
            </div>
            </div>



        <Featured />   

        </div>

        <Footer />     
    </div>
  )
}
