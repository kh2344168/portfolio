import React from 'react';
import './protfolio.css';
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data= [

  {
    id: 1,
    image: IMG1,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    image: IMG2,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    image: IMG3,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    image: IMG5,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    image: IMG6,
    github: "https://github.com",
    demo: "https://github.com"
  }

]


const protfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, image ,title , github ,demo}) =>{
            return (
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item_imgae">
                <img src={image} alt={title} />
              </div>
                <h3>this is a portfolio item title</h3>
                <div className="portfolio_item_cta">
                  <a href={github} className='btn'>github</a>
                  <a href={demo} className='btn btn_primary' target="_blank">liveDemo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default protfolio