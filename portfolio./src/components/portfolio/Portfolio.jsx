import React from "react";
import "./portfolio.css";
import img1 from "../../assets/screen.png";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com/GillesChristian/CEF_344_Project.git',
      demo: 'https://gilleschristian.netlify.app/',
      id: 1,
      title:'Portfolio'
    },

  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item_image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio_item_cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;