import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

import styled from "styled-components";

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  margin-left: 20px;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 50px;
  text-transform: uppercase;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to left bottom, #047ea8, #1288b2, #1d92bd, #269dc7, #2ea7d2);
  &:hover {
    color: #ffffff;
    background-color: red;
  }
`;

const Hero = () => {
  return (
    <div>
      <div id="hero">
      <div id="overlay"></div>
        <div class="container">
         {/* <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div> */}
          <div class="row">
            <div class="col-lg-10 mx-auto text-center top-section">
            <div class="hero_content">
            <h1 class="display-5 text-black color-white animated_heading">
                Build  <span class="line-down"> robust landing pages </span> now
              </h1>
              <Button>
                {" "}
                <NavLink to="#" className="btn">
                  Get Started
                </NavLink>
              </Button>
            </div>
              <div className="music">Music</div>
              <div class="muzieknootjes">
                <div class="noot-1">
                &#9835; &#9833;
              </div>
              <div class="noot-2">
                &#9833;
              </div>
              <div class="noot-3">
                &#9839; &#9834;
              </div>
              <div class="noot-4">
                &#9834;
              </div>
              </div>
            </div>
            <div class="col-lg-6 mx-auto text-center hero"></div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
