import React from 'react'

import { SiFlutter } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaCss3Alt} from 'react-icons/fa';
import { AiFillHtml5} from 'react-icons/ai';
import { FiFigma } from 'react-icons/fi';
import { BsFillBootstrapFill} from 'react-icons/bs';
    function Skills() {
        return (
      
          <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
              <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
              The Language I use
              </p>
          
      
          <div className = "flex flex-wrap justify-center pt-2">
              
             
              <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiFlutter color="#2196f3" className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center">
                  Flutter
                </p>
              </div>
      
              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaReact color="#2196f3" className="mx-auto text-4xl " />
                <p className="mt-6 text-xl font-semibold text-center">
                  React
                </p>
              </div>
      
              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FiFigma color="orange" className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center">
                  Figma
                </p>
              </div>
      
              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
                <p className="mt-6 text-base font-semibold text-center">
                  TailwindCSS
                </p>
              </div>

              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <FaCss3Alt color="#2196f3" className="mx-auto text-4xl" />
                <p className="mt-6 text-base font-semibold text-center">
                    CSS
                </p>
              </div>
              
             
              
              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center">
                  JavaScript
                </p>
              </div>

              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <AiFillHtml5 color="#ea580c" className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center">
                  HTML
                </p>
              </div>

              <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                <BsFillBootstrapFill color="#5b21b6" className="mx-auto text-4xl" />
                <p className="mt-6 text-xl font-semibold text-center">
                Bootstrap
                </p>
              </div>
      
              
             
          </div>
        </div>
        )
      }
      
      export default Skills