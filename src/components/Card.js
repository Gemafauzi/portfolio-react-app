import React from 'react';
import profile from '../images/3-fix.jpg';

import {FaGithub, FaYoutube, FaTwitter, FaRegEnvelope,FaInstagram} from 'react-icons/fa';

function Card() {
    return(
        <div className="w-full">
             <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className = "">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                        Rifki Gema Fauzi
                    </p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Front End Developer / Student

                    </p>
                    <div className="flex align-center justify-center mt-4">
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
        </div>
      </div>
    </div>
  )
}

export default Card;