import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function Footer() {
  return (
    <div id='bot'>
        
        <div className='text-[18px] flex flex-row p-4
        
        sm:text-[50px] '>
        <div className="flex-1 flex flex-col">
          <h1 className='font-bold'>About us</h1>
          <p className='text-[10px] sm:text-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, 
            laboriosam corrupti nihil consequatur saepe voluptate!
          </p>
        </div>

        <div className="flex-1 text-[15px] flex flex-col items-center justify-center font-bold
        sm:hidden
        ">
          <a href="#top" className='cursor-pointer sm:text-[50px]'><FontAwesomeIcon icon={faAnglesUp}/></a>
          <a href="#top" className='cursor-pointer sm:text-[50px]'><h1>Scroll to top</h1></a>
            
            
         
        </div>

        <div className="flex-1 flex flex-col items-center ">

          <h1 className='font-bold sm:text-[50px]'>Contact us</h1>
          <div className='text-[10px] flex flex-col gap-1'>
            <a href="mailto:meeq121@gmail.com" target='_blank' className='sm:text-[20px]'>meeq121@gmail.com</a>
            <div className='flex items-center justify-between sm:text-[25px]
            transition-all duration-200 
            '>
              <a href="" target='_blank' className='transition-all duration-200 hover:text-gray-700 hover:scale-[120%]'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" target='_blank' className='transition-all duration-200 hover:text-gray-700 hover:scale-[120%]'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" target='_blank' className='transition-all duration-200 hover:text-gray-700 hover:scale-[120%]'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="" target='_blank' className='transition-all duration-200 hover:text-gray-700 hover:scale-[120%]'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
