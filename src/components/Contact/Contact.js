import React from 'react'
import './Contact.css'

import styled from 'styled-components'

const StyledContactPage = styled.div`

 padding-top: 70px;
 width:100vw;
 text-aligh: center;

`;

const Heading = styled.h1`
font-sized: 2rem;
color: #047ea8;

`;
const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  margin: 20px;
  font-weight: bolder;
  color:#ffffff;
  font-size: 22px;
  text-transform: uppercase;
  box-shadow: 0 8px 22px rgba(0,0,0,0.1);
  background-image: linear-gradient(to left bottom, #047ea8, #1288b2, #1d92bd, #269dc7, #2ea7d2);

  `;


const Contact = () => {
  return (
    <StyledContactPage>
    
      <section id="contact">
      <div class="container contact_overlay">
        <div class="row mb-5">
          <div class="col-md-8 mx-auto text-center">
      
            <Heading>Get In Touch</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur nisi necessitatibus
              repellat distinctio eveniet eaque fuga in cumque optio consectetur
              harum vitae debitis sapiente praesentium aperiam aut
            </p>
          </div>
        </div>

        <form action="" class="row g-3 justify-content-center">
          <div class="col-md-5">
            <input type="text" class="form-control" placeholder="Full Name" />
          </div>
          <div class="col-md-5">
            <input
              type="text"
              class="form-control"
              placeholder="Enter E-mail"
            />
          </div>
        
          <div class="col-md-10">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              class="form-control"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div class="col-md-10 d-grid">
            <Button>SEND</Button>
          </div>
        </form>
      </div>
    </section>
      </StyledContactPage>
  )
}

export default Contact