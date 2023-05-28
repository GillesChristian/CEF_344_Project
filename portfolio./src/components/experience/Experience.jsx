import React from "react";
import "./experience.css";
import { IoSchool } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What education i have</h5>
      <h2>My Education</h2>
      <div className="container experience__container">
        <div className="experience-list">
            <div>
                    <TbCertificate className="experience__icon"/>
            </div>
            <div className="experience-description">
                <h3>GCE Ordinary Level</h3>
                <p>Cameroon General Certificate of Education completed at G.B.H.S DEIDO</p>
                <small>2019</small>
            </div>
        </div>
        <div className="experience-list">
            <div>
                <TbCertificate className="experience__icon"/>
            </div>
            <div className="experience-description">
                <h3>GCE Advanced Level</h3>
                <p>Cameroon General Certificate of Education completed at G.B.H.S DEIDO</p>
                <small>2019 - 2021</small>
            </div>
        </div>
        <div className="experience-list">
            <div>
                <IoSchool className="experience__icon" color="white"/>
            </div>
            <div className="experience-description">
                <h3>B.eng in Engineering</h3>
                <p>Currently enroll in  a Bachelor program of Computer Engineering at the Faculty of Engineering and Technology</p>
                <small>2021 - Now</small>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;