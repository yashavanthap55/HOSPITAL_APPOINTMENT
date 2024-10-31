import React, { useEffect, useRef } from 'react'
import './../styles/NavBar.css'
import {NavLink} from 'react-router-dom'
import gsap from 'gsap';



const NavBar = () => {
 const NavRef=useRef(null);
 useEffect(() => {
  if (NavRef.current) {
    gsap.fromTo(
      NavRef.current,
      { top: '-20vh' },
      { top: '0vh', duration: 2,ease: "power4.out" }
    );
  }
}, []); 
  return (
    <div className='Navbar' ref={NavRef}>
      <NavLink to='/' style={{textDecoration:'none'}}><div className="navleft">
      RH
      </div></NavLink>
      <div className="navright">
       <ul>
        <NavLink to='/' style={{textDecoration:'none'}}>
          <li>Home</li>
          <li>Home</li>
        </NavLink>
        <NavLink to='/doctors' style={{textDecoration:'none'}}>
          <li>Doctors</li>
          <li>Doctors</li>
        </NavLink>
        <NavLink to='/about' style={{textDecoration:'none'}}>
          <li>Appointments</li>
          <li>Appointments</li>
        </NavLink>
        <NavLink to='/contact' style={{textDecoration:'none'}}>
          <li>Contacts</li>
          <li>Contacts</li>
        </NavLink>
       </ul>
      </div>
      <div className="prof">
        <NavLink to='/login'><li>Sign in/log in</li></NavLink>
      </div>
    </div>
  )
}

export default NavBar;