import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
function login() {
  return (
    <div className='bgImg bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen'>
           <div className='bg-[#9f9e9e4e] py-5 px-5 rounded-lg mt-[70px]'>
           <div className=' w-full p-7 flex flex-col gap-7 '>
           
                  <div className='flex flex-col'>
                  <div className='flex text-white justify-center items-center gap-2'>
                  <MdOutlineMailOutline className='text-2xl'/>
                    <input className='ring-2  px-4 py-1 rounded-md bg-gray-400 placeholder:text-white' type="text" placeholder='Enter Your E-mail'/>
                  </div>
                  </div>
                 
                  <div className='flex flex-col'>
                  <div className='flex text-white justify-center items-center gap-2'>
                  <RiLockPasswordLine className='text-2xl'/>
                    <input className='ring-2  px-4 py-1 rounded-md bg-gray-400 placeholder:text-white' type="password" placeholder='Enter Your Password'/>
                  </div>
                  </div>

                    <div className='flex flex-col'>
                    <button className='text-xl text-white bg-blue-950 py-2 rounded-lg font-semibold hover:scale-105 duration-300'>Login</button>
                    <button className='text-white hover:scale-105 duration-300'>Forgot Password</button>
                    <h1 className='text-white px-36'>or</h1>
                    <div className='flex space-x-4 items-center mt-2'>
                      <h1 className='text-white px-20 cursor-pointer hover:underline'>Create an account?</h1>
                      
                    </div>
                    </div>

    </div> 
   </div>
</div>
  )
}

export default login