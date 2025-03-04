import React from "react";
import "./about.css";

export function About() {
  return (
    <div className="about-container">
      <h2> My Expertise</h2>
      <div className="container">
        <div className="column"><h3>Column 1</h3><h5>Software
        Development</h5><p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p></div>
        <div className="column"><h3>Column2</h3><h5>Frontend Dev
        React, NextJ</h5><p>Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p></div>
        <div className="column"><h3>Column 1</h3><h5>Flutter Dev
        Android, iOS</h5><p>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p></div>
      </div>
    </div>
  );
}

export default About;
