import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {


return (
<div className='bg-emerald-800 '>
  <nav className="text-white ">
    <NavLink className='' to='/'>Home </NavLink>
    <NavLink className='' to='/paperwallet'>Paper Wallet</NavLink>
    <NavLink className='' to='/webwallet'>Web Wallet</NavLink>
    <NavLink className='' to='/mobilewallet'>Mobile Wallet</NavLink>
    <NavLink className='' to=''>FAQ</NavLink>
    <NavLink className='' to=''>Contact Us</NavLink>
  </nav>
</div>
)}
export default Nav
