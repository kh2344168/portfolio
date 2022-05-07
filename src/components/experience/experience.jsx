import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
        <h5>wht skills i have</h5>
        <h2>my experience</h2>
        <div className='container experience_container'>
          <div className="experience_frontend">
            <h3>frontend development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>css</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>javascript</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>bootstrap</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>jquery</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>react</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
            </div>
          </div>
          {/*==================== END FRONTEND ============================ */}
          <div className="experience_backend">
            <h3>backend development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>node js</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>paython</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>php</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>mysql</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div>
                    <h4>laravel</h4>
                    <small className='text-light'>experience</small>
                  </div>
                </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience
