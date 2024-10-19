import logo from '../logo/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

  const MenuBarData = [
    { Name:'Models', href:'/Models'},
    { Name:'Electric', href:'/Electric'},
    { Name:'Configurator', href:'/Configurator'},
    { Name:'Electric', href:'/Visit Online Shop'},
    { Name:'MoreBMW', href:'/More BMW'},
  ]

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  // Bar Open and Close
  const [menu, setMenu] = useState(false)
  const handleChane = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <nav className='w-full fixed text-white  flex  justify-between items-center px-[50px] underline-offset-8'>
        <div className=' flex items-center'>
          <Link to='/'><img className='w-[55px] ' src={logo} alt="logo" /></Link>
          <ul className='hidden md:flex items-center gap-9 ml-[50px]'>

            {
              MenuBarData.map((value)=>
                (<li className='hover:underline  leading-none hover:leading-loose'><Link to={value.href}>{value.Name}</Link></li>)
              )
            }

          </ul>
        </div>

        <div className='flex items-center space-x-4 text-white'>
          <Link to='/Profile'><i className="fa-regular fa-user" /></Link>
          <i className="fa-solid fa-shop " />
          <i className="fa-solid fa-location-dot" />
          <i className="fa-solid fa-magnifying-glass" />

          <div onClick={() => setIsOpenMenu(!isOpenMenu)} className='lg:hidden'>

            {
              menu ? (<i onClick={handleChane} className="fa-solid fa-xmark text-3xl block cursor-pointer" />)
                :
                (<i onClick={handleChane} className="fa-solid fa-bars text-3xl block cursor-pointer" />)
            }
          </div>
        

          <div className={`absolute x1:hidden top-[70px] left-0 w-full bg-gray-400 flex flex-col items-center gap-6 pb-5 font-semibold text-lg transform transition-transform ${isOpenMenu ? "opacity-100" : "opacity-0"}`} >

          {
              MenuBarData.map((value)=>
                (<div className='hover:underline'><Link to={value.href}>{value.Name}</Link></div>)
              )
            }

          

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar