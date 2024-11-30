import React from 'react'
import logo from '../logo/logo.png'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {


  return (
 
 <div>
    <nav className='fixed w-full flex justify-between items-center px-6 bg-[#48484889]'>
    <Link to='/'><img className='w-14' src={logo} alt="logo" /></Link>
        <ul className='space-x-8 text-white font-semibold hidden md:flex'>
        <Link className='hover:underline cursor-pointer hover:scale-105 duration-300' to="/models">MODELS</Link>
        <Link className='hover:underline cursor-pointer hover:scale-105 duration-300' to="/about">ABOUT</Link>
        <Link className='hover:underline cursor-pointer hover:scale-105 duration-300' to="/electric">ELECTRIC</Link>
        <Link className='hover:underline cursor-pointer hover:scale-105 duration-300' to="/configurator">CONFIGURATOR</Link>
        <Link className='hover:underline cursor-pointer hover:scale-105 duration-300'  to="/more">MORE BMW</Link>
        </ul>
        <div className='flex items-center space-x-5 text-white font-semibold'>
            <Link to="/sign">Sign up</Link>
            <Link to="/login">Login</Link>
            <FaShoppingCart />

        </div>
    </nav>
 </div>
  )
}

export default Navbar