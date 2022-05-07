import React from 'react';
import "./Services.css"
import {BsCheck} from "react-icons/bs"
const Services = () => {
  return (
    <section id='services'>
      <h5>what i offer</h5>
      <h2>services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI / UX design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
          </ul>
        </article>
        {/* ==================================END UI/UX=========================== */}
        <article className='service'>
          <div className="service_head">
            <h3>web development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
          </ul>
        </article>
        {/* ==================================END web development=========================== */}
        <article className='service'>
          <div className="service_head">
            <h3>content creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
            <li>
              <BsCheck className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet, enim soluta quis</p>
            </li>
          </ul>
        </article>
        {/* ==================================END content creation=========================== */}
      </div>
    </section>
  )
}

export default Services
