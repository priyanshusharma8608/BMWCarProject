import React from 'react'
// import HomeVideo from '../video/BMW Electric Cars- Explore EV Benefits & Technologies.mp4'
import bubblevideo from '../video/bubble.mp4'

function Electric() {
  return (
    <div className='bg-white'>
         <div className=' w-full'>
          <h1 className='absolute text-8xl font-semibold text-white mt-[150px] ml-[50px]'>Electric Future</h1>
        <video className="h-full  w-full" autoPlay muted loop>
          <source src={bubblevideo} type='video/mp4' />
        </video>
      </div>

      {/* <div className='img2 min-h-screen bg-cover h-[300px]'>
        <div className='py-24'>
          <h1 className='text-white text-5xl font-sans px-44 '>BMW ELECTRIC CARS</h1>
          <h1 className='text-white text-5xl font-sans font-thin px-20'>STARTING FROM 69,999/ Month</h1>
          <button className='font-bold bg-blue-950 text-white ' Book a Test Drive />
        </div> 

       </div> */}
       <div>
        <h1 className='text-gray-500 text-3xl'>THE BMW ELECTRIC CARS.</h1>
        <h1 className='text-gray-400 text-2xl'>100 % electric. 100 % driving pleasure. 100 % BMW.</h1>
       </div>
    <div>

    </div>
      
   
    </div>
  )
}

export default Electric