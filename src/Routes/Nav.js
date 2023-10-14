import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {

return (
<div className=' overflow-hiddenx overflow-x-hidden h-screen w-screen '>
  <div className="flex justify-center px-8 drop-shadow bg-[#52b69a] text-white lg:h-20 font-semibold ">
    <nav className="lg:flex items-center justify-around max-w-[1040px] w-full hidden mx-4 ">
      <img className='mr-40 w-14 ' src="./img/LOGO.png" alt="" /> 
      <ul className="flex items-center justify-between w-full ">
        <li className=""><a href="">Home</a></li>
        <li className=""><a href="">Paper Wallet</a></li>
        <li className=""><a href="">Web Wallet</a></li>
        <li className=""><a href="">Mobile Wallet</a></li>
        <li className=""><a href="">FAQ</a></li>
        <li className=""><a href="">Contact Us</a></li>
      </ul>
    </nav>

    <nav className="w-full flex justify-between items-center lg:hidden">
      <img className='mr-40 w-14 ' src="./img/LOGO.png" alt="" /> 
      <button id="menu" className='bg-transparent '>
        <img src="/img/menu.png" alt="" className="w-10 " />
      </button>
    </nav>

    <nav id="nav" className="fixed top-0 bottom-0 right-0 left-0 h-screen bg-[#52b69a] p-1 hidden ">
      <div className="flex justify-between  items-center mx-6 ">
        <img className='mr-40 w-14 ' src="./img/LOGO.png" alt="" /> 
        <button id="x" className=''>
          <img src="/img/menu.png" alt="" className="w-10 " />
        </button>
      </div>

      <ul className="text-center mt-24 flex flex-col gap-5 text-2xl ">
        <li className="hover:text-black"><a href="">Home</a></li>
        <li className="hover:text-black"><a href="">Paper Wallet</a></li>
        <li className="hover:text-black"><a href="">Web Wallet</a></li>
        <li className="hover:text-black"><a href="">Mobile Wallet</a></li>
        <li className="hover:text-black"><a href="">FAQ</a></li>
        <li className="hover:text-black"><a href="">Contact Us</a></li>
      </ul>
    </nav>
  </div>

  <Outlet />
</div>
)}
export default Nav
