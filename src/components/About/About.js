import React from "react";
import "./About.css";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-left: 20px;
  font-weight: bolder;
  color: yellow !important;
  text-transform: uppercase;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(
    to left bottom,
    #047ea8,
    #1288b2,
    #1d92bd,
    #269dc7,
    #2ea7d2
  );
`;

const About = () => {
  return (
    <div id="about">
      <h6 style={{ color: "#047ea8", fontSize: "20px", textAlign: "center" }}>
        LESSON
      </h6>
      <h1 style={{ color: "#061F45" }}>Our Different Lesson</h1>

      <div class="d-flex align-items-center about-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto text-center my-5">
              <h5 class=" text-black my-40 "> Violin Lesson</h5>
              <p class=" my-3">
                The violin is a beautiful and expressive instrument that
                requires discipline and dedication to master. Violin lessons
                provide a comprehensive approach to technique, musicianship, and
                performance.
              </p>

              <Button>
                <a class="popup_btn" href="#popup1">
                  Learn More
                </a>
              </Button>

              {/* pop-up start */}
              <div id="popup1" class="overlay">
                <div class="popup">
                  <h2>What We are proving in Our Violin Lesson</h2>
                  <a class="close" href="#">
                    &times;
                  </a>
                  <div class="content">
                      <div>
                        <h6>Proper Technique:</h6>
                        <p>
                          Beginners focus on establishing correct posture,
                          bowing techniques, and hand positioning. Developing a
                          solid foundation in technique is essential for
                          producing a beautiful tone and preventing injury.
                        </p>
                      </div>

                      <div>
                        <h6> Music Reading and Ear Training: </h6>
                        <p>
                          Violinists learn to read sheet music and understand
                          musical notation. Ear training exercises help students
                          develop a keen sense of pitch and intonation.
                        </p>
                      </div>

                      <div>
                        <h6> Bow Control and Articulation: </h6>
                        <p>
                          {" "}
                          Mastering the bow is a crucial aspect of playing the
                          violin. Lessons cover bowing techniques, dynamics,
                          articulation, and phrasing to create expressive and
                          nuanced performances.
                        </p>
                      </div>

                      <div>
                        <h6> Classical Repertoire: </h6>
                        <p>
                          {" "}
                          Classical music forms the backbone of violin training.
                          Students explore a diverse range of repertoire,
                          including solo pieces, concertos, and chamber music,
                          from different time periods.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              {/* pop_up ends */}
            </div>
            <div class="col-lg-6 text-center my-5">
              <h5 class=" text-black "> Guitar Lesson</h5>
              <p class=" my-3">
                Guitar lessons offer an exciting journey into the world of
                music, allowing students to explore a versatile instrument that
                can be played in a variety of genres. Guitar lessons can help
                you to achieve your goals.
              </p>
              <Button>
                {/* <NavLink to="/popup1" className="btn"> Learn More </NavLink> */}
                <a class="popup_btn" href="#popup1">
                  Learn More
                </a>
              </Button>

              {/* pop-up start */}
              <div id="popup1" class="overlay">
                <div class="popup">
                  <h2>What We are Proving in Our Guitar Lesson</h2>
                  <a class="close" href="#">
                    &times;
                  </a>
                  <div class="content">
                    <div>
                      <div>
                        <h4>Basics and Technique:</h4>
                        <p>
                          Beginners start with the fundamentals of guitar
                          playing, including correct posture, hand positioning,
                          and picking techniques. Learning to read guitar tabs
                          or sheet music may also be included.
                        </p>
                      </div>

                      <div>
                        <h4> Chords and Rhythm: :</h4>
                        <p>
                          As students progress, they delve into learning various
                          chord shapes, progressions, and strumming patterns.
                          This lays the foundation for playing songs and
                          accompanying other musicians.
                        </p>
                      </div>

                      <div>
                        <h4> Music Theory :</h4>
                        <p>
                          Music Theory: Understanding music theory helps
                          guitarists develop a deeper comprehension of the
                          instrument. Topics such as scales, key signatures, and
                          chord construction are explored to enhance
                          improvisation and composition skills.
                        </p>
                      </div>

                      <div>
                        <h4> Styles and Genres:</h4>
                        <p>
                          Guitar lessons often cater to different musical
                          styles, including classical, rock, blues, jazz, and
                          folk. Students can choose to specialize in a
                          particular style or explore a variety of genres.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pop_up ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
