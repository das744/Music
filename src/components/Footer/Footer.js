import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
       <footer>
      <div class="footer-top">
        <div class="container">
          <div class="row ">
            <div class="col-lg-2"> Logo
              <img class="logo" src="img/logo-white.svg" alt="" />
            </div>
            <div class="col-lg-2">
              <h5 class="text-white">Brand</h5>
              <ul class="list-unstyled">
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div class="col-lg-2">
              <h5 class="text-white">More</h5>
              <ul class="list-unstyled">
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Privacy & Policy</a></li>
               
              </ul>
            </div>
            <div class="col-lg-4">
              <h5 class="text-white">Contact</h5>
              <ul class="list-unstyled">
                <li>Address: </li>
                <li>Email: </li>
                <li>Phone: (61) </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mr-100">
              <p class="mb-0 " >
                © 2020 copyright all right reserved | Designed with
                <i class="bx bx-heart text-danger"></i> by ADWebDeveloper
             
              </p>
            </div>
            {/* <div class="col-md-6">
              <div class="social-icons">
                <a href="#"><i class="bx bxl-facebook"></i></a>
                <a href="#"><i class="bx bxl-twitter"></i></a>
                <a href="#"><i class="bx bxl-instagram-alt"></i></a>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </footer>
      
    </div>
  )
}

export default Footer