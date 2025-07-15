import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
const Navbar = () => {
    const [Menu, setMenu] = useState("Home");
  return (
    <div className = 'navbar'>
        <img src = {assets.logo} alt ="" className="logo"/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={Menu === "Home"?"active":""} >Home</li>
            <li onClick={()=>setMenu("menu")} className={Menu === "menu"?"active":""} >menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={Menu === "mobile-app"?"active":""} >mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={Menu === "contact-us"?"active":""} >contact us</li>
        </ul>
        <div className="navbar-right">
            <img src = {assets.search_icon} alt ="" />
            <div className='navbar-search-icon'>
                <img src = {assets.basket_icon} alt ="" />
            </div>
            <div className="dot"> 
                <button>sing in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
