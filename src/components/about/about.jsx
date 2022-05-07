import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {AiOutlineFolderOpen} from "react-icons/ai";
const about = () => {
  return (
    <section id='about'>
      <h5>get to know</h5>
      <h2>about me</h2>
      <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me_img'>
              <img src={ME} alt="About imge" />
            </div>
          </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>experience</h5>
              <small>3 + years working</small>
            </article>

            <article className='about_card'>
              <FiUser className='about_icon'/>
              <h5>clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className='about_card'>
              <AiOutlineFolderOpen className='about_icon'/>
              <h5>experience</h5>
              <small>80 + completed </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda recusandae, saepe odit quidem exercitationem quibusdam
            asperiores, officia tempora deleniti iure nulla. Consectetur laboriosam 
            pariatur recusandae vel dolore enim maxime quos!
          </p>
          <a href="#contact" className='btn btn_primary'>let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about