import React from "react";
import "./Services.css";
import Data from"./Data"
import Card from "./Card";

import styled from "styled-components";

const StyledServicePage = styled.div`

  width: 100vw;
  text-aligh: center;
`;

const Services = () => {
  return (
    <StyledServicePage>
      <section id="services">
        <div class="service-container">
          <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
              <h6 style={{ color: "#047ea8", fontSize: "20px" }}>SERIVCES</h6>
              <h1 style={{ color: "#061F45" }}>Our Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p>
            </div>
          </div>
          <div class="row g-4 service_card">
        

                  {Data.map((val,ind)=>{
                    return(
                      <Card title = {val.title} des={val.des}/>
                    )
                  }
                )}


          </div>
        </div>
      </section>
    </StyledServicePage>
  );
};

export default Services;
