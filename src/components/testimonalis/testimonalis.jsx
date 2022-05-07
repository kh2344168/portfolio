import React from 'react'
import "./testimonalis.css"
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';








const data =[
  {
    id : 1,
    image: AVTR1,
    name:"tine snow"
  },
  {
    id : 2,
    image: AVTR2,
    name:"shatta wale"
  },
  {
    id : 3,
    image: AVTR3,
    name:"kwame despite"
  },
  {
    id : 4,
    image: AVTR4,
    name:"tine snow"
  }
]

const Testimonial = () => {
  return (
    <section>
      <h5>review form clients</h5>  
      <h2>testimonalis</h2>
      <Swiper className="container testimonials_container"
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      
  
      
      >

        

        {
          data.map(({id,image,name})=>{
            return(
              <SwiperSlide key={id} className="testimonial">
              <div className='client_avatar'>
                <img src={image} alt="Avater one" />
              </div>
              <h5>{name}</h5>
                <small className='client_review'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem praesentium atque odit quia. Dolores 
                  beatae aut sequi quae vero, consequatur velit? 
                  Mollitia id libero animi placeat sint dolorum dolorem omnis!
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial