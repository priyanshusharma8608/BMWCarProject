import Models from '../components/Models'
function Home() {

  return (
    <div className="">

      {/* First Banner */}
      <div className='img3 min-h-screen bg-cover h-[300px]'>
        <div className='py-24'>
          <h1 className='text-white text-5xl font-sans px-64 '>BMW CARS</h1>
          <h1 className='text-white text-5xl font-sans font-thin px-20 mt-2'>STARTING FROM 69,999/ Month</h1>
          <button className='font-bold bg-blue-950 text-white ' Book a Test Drive />
        </div>
      </div>

      {/* Second Banner */}
      <div className='mt-20 img2 min-h-screen bg-cover h-[300px] '>
        <div className='py-24'>
        </div>
      </div>


      {/* Heading Section  */}
      <h1 className="items-center ml-[450px] mt-[30px] text-5xl">FIND YOUR BMW.</h1>


      {/* Footer Section */}
      <div className="flex items-center ml-10 gap-5 pb-[80px]">
        <div className="items-center">
          <img className='font-thin w-[600px]' src="https:bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542" alt="Find a New Car." />
          <h1 className="ml-28 font-sans text-2xl">Find a New Car.</h1>
          <button className="bg-white ml-32 mt-6 ring-black ring-1 px-3 items-center text-xl">Search Now</button>
        </div>
        <div>
          <img className='w-[600px]' src="https:bmw.scene7.com/is/image/BMW/NxW_Home_ICON_USED_CAR?wid=1504&hei=542" alt="Book a Test Drive." />
          <h1 className="ml-24 font-sans text-2xl">Book a Test Drive.</h1>
          <button className="bg-white  ml-24  mt-6 ring-black ring-1 px-3 text-xl">Request a test drive</button>
        </div>
        <div>
          <img className='w-[600px]' src="https:bmw.scene7.com/is/image/BMW/NxW_Home_ICON_CON?wid=1504&hei=542" alt="Build Your Own." />
          <h1 className="ml-28 font-sans text-2xl">Build Your Own.</h1>
          <button className="bg-white  ml-28 mt-3 ring-black ring-1 px-3 text-xl">Configure & Price</button>
        </div>
      </div>

      {/* Four Banner */}
      <div className='img4 h-[400px] '>
      <h1 className="text-white text-5xl font-sans py-24 px-16">THIS IS FORWARDISM: THE X7</h1>
      <button className="hover:ring-2 ml-40 text-2xl font-thin text-white ring-1 py-2 ring-white px-10 ">Know More</button>
      </div>
      
      
      
      <div className="mt-20 flex">
        <img  className=' ml-20 mb-5 w-[500px] h-[300px]' src="https://bmw.scene7.com/is/image/BMW/iX_Banner:16to9?fmt=webp&wid=1504&hei=846" alt="car" />
        <div className="ml-5">
          <h1 className=" font-thin">BMW Electrified</h1>
        <h1 className="text-5xl font-thin mt-2">THE JOY OF ELECTRIC </h1>
        <h1 className="text-5xl font-thin mt-2">DRIVING</h1>
        <h1 className="text-xl font-sans mt-4 mr-20 ">100 % electric. 100 % driving pleasure. 100 % BMW. Experience an entirely new 
          sensation of sheer driving pleasure</h1>
          <button className="mt-9 hover:ring-2 ml-40 text-xl font-semibold text-BLACK ring-1 py-2 ring-black px-10 ">  Know More </button>
        </div>
      </div>


  <div className="mt-20 flex">
        <img  className=' ml-20 mb-5 w-[500px] h-[300px]' src="https://www.bmw.in/en/index/_jcr_content/root/maincontent/contentblueprint/contentblueprint_cop_754377270/image.coreimg.jpeg/1711093032386/homepage-specialoffers.jpeg" alt="car" />
        <div className="ml-5">
          <h1 className=" font-thin mt-2">BMW Financial Services</h1>
        <h1 className="text-5xl font-thin mt-2">BMW Special Offers</h1>
        <h1 className="text-xl font-sans mt-4 mr-20 ">Monthly EMI starting from Rs.49999*/Month. Check Out similar BMW finance</h1>
        <h1 className="text-xl font-sans  mr-20 "> offers available across the BMW range</h1>
          <button className="mt-9 hover:ring-2 ml-40 text-xl font-semibold text-BLACK ring-1 py-2 ring-black px-10 ">  Know More </button>
        </div>
      </div>
      <div className="text-xl ml-28 flex gap-12">
        <h1>FIND YOUR BMW</h1>
        <a className='' href="Models">All Models</a>
      </div>
    
    </div>
  )
}

export default Home