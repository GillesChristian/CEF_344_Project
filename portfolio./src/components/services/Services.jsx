import React from 'react'
import './services.css'
import ux from '../../assets/5757453.jpg'
import sdt from '../../assets/Screen Shot 2023-05-28 at 04.17.52.png'
import web from '../../assets/19362653.jpg'

export const Services = () => {
  return (
    <section id="service">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <div className="services_list">
            <div className="services_list_header">
                <img src={ux} alt="Ux/Ui Design" />
            </div>
            <div className="services_list_description">
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iure inventore molestias mollitia dolore necessitatibus quo a corporis expedita adipisci consequatur.</p>
                <div className="services_tectnologies">
                    <div className="tech">Figma</div>
                    <div className="tech">Adobe XD</div>
                    
                </div>
            </div>
        </div>
        <div className="services_list">
            <div className="services_list_header">
                <img src={web} alt="Ux/Ui Design" />
            </div>
            <div className="services_list_description">
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iure inventore molestias mollitia dolore necessitatibus quo a corporis expedita adipisci consequatur.</p>
                <div className="services_tectnologies">
                    <div className="tech">HTML & CSS</div>
                    <div className="tech">REACT</div>
                    <div className="tech">JAVASCRIPT</div>
                    
                </div>
            </div>
        </div>
        <div className="services_list">
            <div className="services_list_header">
                <img src={sdt} alt="Ux/Ui Design" />
            </div>
            <div className="services_list_description">
                <h3>Software Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iure inventore molestias mollitia dolore necessitatibus quo a corporis expedita adipisci consequatur.</p>
                <div className="services_tectnologies">
                    <div className="tech">JAVA</div>
                    <div className="tech">JAVASCRIPT</div>
                    <div className="tech">C++</div>
                    
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Services;