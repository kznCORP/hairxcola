import React from "react";

import Header from "../../src/layouts/Header";

export const About = () => {
  return (
    <>
      <Header />
      <div className="aboutMe">
        <div className="am-container">
          <h2 className="am-title">About Me.</h2>
          <div className="horizontal-line"></div>

          <div className="am-description">
            <p className="am-paragraph">Hello, I&rsquo;m Nicola Narido — The artist behind the chair.</p>
            <br/>
            <p className="am-paragraph">
              I specialize in colour with all hair types for any transformation
              from dimensional sun kissed balayages to creative colour
              placements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
