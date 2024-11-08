import React from 'react'
import './../styles/footer.css'

const footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="scg">
      <svg id="wave" viewBox="0 0 1440 170" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="var(--primary_green--)" offset="0%"></stop><stop stopColor="var(--primary_green--)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,85L30,82.2C60,79,120,74,180,62.3C240,51,300,34,360,45.3C420,57,480,96,540,119C600,142,660,147,720,130.3C780,113,840,74,900,73.7C960,74,1020,113,1080,119C1140,125,1200,96,1260,73.7C1320,51,1380,34,1440,34C1500,34,1560,51,1620,48.2C1680,45,1740,23,1800,34C1860,45,1920,91,1980,99.2C2040,108,2100,79,2160,65.2C2220,51,2280,51,2340,68C2400,85,2460,119,2520,119C2580,119,2640,85,2700,68C2760,51,2820,51,2880,48.2C2940,45,3000,40,3060,56.7C3120,74,3180,113,3240,133.2C3300,153,3360,153,3420,138.8C3480,125,3540,96,3600,85C3660,74,3720,79,3780,79.3C3840,79,3900,74,3960,76.5C4020,79,4080,91,4140,90.7C4200,91,4260,79,4290,73.7L4320,68L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"></path></svg>
      </div>
    <div className="main">
      <div className="rvu">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate modi aut.
      </div>
      <div className="redirect">
        <h2>Home</h2>
        <h2>About us</h2>
        <h2>Contact us</h2>
        <h2>Privacy policy</h2>
      </div>
      <div className="gic">
        <h2>+91 8484545545</h2>
        <h2>rvu@edu.in</h2>
      </div>
      </div>
      <div className="copyright">
        <p>copyright © 2024 RV Hospital-All Right Reserved.</p> 
    </div>
    </div>

  )
}

export default footer