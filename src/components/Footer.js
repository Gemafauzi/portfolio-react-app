import React from 'react';
import {FaGithub, FaYoutube, FaTwitter, FaRegEnvelope,FaInstagram} from 'react-icons/fa';
function Footer()
{
    return(
        <div className='py-5 border-t-3/2'>
            <div className='flex justify-center mt-4'>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/Gemafauzi">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.youtube.com/channel/UCFt7Z73X01X0xB_-sXfvV7w/featured">
              <FaYoutube />
              <span class="sr-only">YouTube</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/Gema33136813">
              <FaTwitter />
              <span class="sr-only">Twitter</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="bangkigem23@gmail.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/bangkigem/?hl=id">
              <FaInstagram />
              <span class="sr-only">Instagram</span>  
            </a>

            </div>
            <div className='flex justify-center mt-4'>
               <p className='text-black mb-4'>
                Made with <span className='mr-2' role="link" aria-label='heart'>💙</span> by <a className="text-blue-500 hover:underline" href="bangkigem23@gmail.com">Rifki Gema Fauzi</a>

               </p> 
            </div>
            </div>
    )
}

export default Footer;