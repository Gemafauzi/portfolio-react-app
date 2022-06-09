import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'


function About()
{
    return(
        <div className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black md:text-4xl font-bold text-center">
                Hey 🖐
            </p>
            <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
            Hi, I'm Rifki Gema Fauzi, I'm a front end developer. And I like this method, it makes me grow and I'm still in the 7th semester. This is my portfolio while I was in the IT world and currently I'm focusing on discussing the program I'm working on, namely for fort end developers.😄
            </p>
       
          
          
            <ScrollIntoView selector = "#tech">

<div class='mx-auto p-20'>
        
   <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 

    </div>
    </ScrollIntoView>
    </div>
     )
    }



export default About;