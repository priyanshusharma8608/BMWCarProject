import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { ImProfile } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";



function Sign() {


  const navigater = useNavigate()

  const [signupdata, setSignUpData] = useState()

  const changeSignUpData = (e) => {
    e.preventDefault()
    setSignUpData({ ...signupdata, [e.target.name]: e.target.value })

  }

  const SignupDataBase = async (e) => {
    e.preventDefault()
    try {

      const url = `http://localhost:5000/CreaterUser`;

      const user = await axios.post(url, signupdata)

      if (user.status === false) { window.alert("Invalid Data") }
      else {
        navigater('/OtpVerification')
      }
    }
    catch (e) { window.alert(e.response.data.msg) }
  }

  return (
    <div className=' bgImg bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen'>

      <div className='bg-[#9f9e9e4e] py-5 px-5 rounded-lg mt-[70px]'>

        <div className=' w-full p-7 flex flex-col gap-7 '>
          <div className='flex flex-col'>

            <div className='flex text-white justify-center items-center gap-2'>
              <ImProfile className='text-2xl' />
              <input onChange={changeSignUpData} name='name' className='ring-2  px-4 py-1 rounded-md bg-gray-400 placeholder:text-white' type="text" placeholder='Enter Your Name' />
            </div>
          </div>

          <div className='flex flex-col'>

            <div className='flex text-white justify-center items-center gap-2'>
              <MdOutlinePhone className='text-2xl' />
              <input onChange={changeSignUpData} name='mobileNo' className='ring-2  px-4 py-1 rounded-md bg-gray-400 placeholder:text-white' type="text" placeholder='Enter Your Mobile No.' />
            </div>
          </div>


          <div className='flex flex-col'>

            <div className='flex text-white justify-center items-center gap-2'>
              <MdOutlineMailOutline className='text-2xl' />
              <input onChange={changeSignUpData} name='email' className='ring-2  px-4 py-1 rounded-md bg-gray-400 placeholder:text-white' type="text" placeholder='Enter Your E-mail' />
            </div>
          </div>



          <div className='flex flex-col'>

            <div className='flex text-white justify-center items-center gap-2'>
              <RiLockPasswordLine className='text-2xl' />
              <input onChange={changeSignUpData} name='password' className='ring-2  px-4 py-1 rounded-md bg-gray-400 placeholder:text-white' type="password" placeholder='Enter Your Password' />
            </div>
          </div>

          <div className='flex flex-col'>
            <button onClick={SignupDataBase} className='text-xl text-white bg-blue-950 py-2 rounded-lg font-semibold hover:scale-105 duration-300'>Sign Up</button>
            <button className='text-white hover:scale-105 duration-300'>Forgot Password</button>
            <h1 className='text-white px-36'>or</h1>
            <div className='flex space-x-4 items-center mt-2'>
              <h1 className='text-white px-4'>Have an account?</h1>
              <button className='text-white bg-blue-950 px-7 py-1 rounded-md hover:scale-105 duration-300'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign
