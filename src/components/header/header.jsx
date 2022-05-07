import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>hello i 'm</h5>
        <h1>bajia bintu
          <h5 className="text-light">fullstack Developar</h5>
        </h1>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />          
        </div>
        <a href="#acontact" className='scroll_down'>scroll down</a>
      </div>
    </header>

  )
}

export default header