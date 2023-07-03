import React from "react";
import "./Lesson.css";

const Lesson = () => {
  return (
    <div id="lesson_section">
         <h6 style={{color:"#047ea8",  fontSize:'20px', textAlign:'center'}} >LESSON</h6>
            <h1 style={{color:"#061F45", paddingBottom:'50px' }}>What You Learn From Us</h1>
        <div className="lesson">

        <div class="lessons">
        <div class="each">
          <div class="box">
            <div class="content">
              <h2>Basics and Technique</h2>
              {/* <p>Fundamentals, Correct posture, Hand positioning,Different techniques.</p> */}
             
            </div>
          </div>
        </div>
        <div class="each">
          <div class="box">
            <div class="content">
                {/* icon */}
              <h2>Chords and Rhythm</h2>
              {/* <p>various chord shapes, progressions, and strumming patterns.</p> */}
             
            </div>
          </div>
        </div>
        <div class="center">
          <div class="box guilar_lesson">
            <h2>Guitar</h2>
          </div>
        </div>
        <div class="each">
          <div class="box">
            <div class="content">
              {/* icon */}
              <h2>Styles and Genres</h2>
              {/* <p>different musical styles, including classical, rock, blues, jazz, and folk. Students can choose to specialize in a particular style or explore a variety of genres.</p> */}
            </div>
          </div>
        </div>
        <div class="each">
          <div class="box">
            <div class="content">
             {/* icon */}
              <h2>Music Theory</h2>
              {/* <p>scales, key signatures, and chord construction are explored to enhance improvisation and composition lessons.</p> */}
            </div>
          </div>
        </div>
      </div>
      <div class="lessons">
        <div class="each">
          <div class="box">
            <div class="content">
              <h2>Proper Technique</h2>
             {/* <p>correct posture, bowing techniques, and hand positioning. Developing a solid foundation in technique is essential for producing a beautiful tone and preventing injury.</p> */}
             
            </div> 
          </div>
        </div>
        <div class="each">
          <div class="box">
            <div class="content">
              <h2>Classical Repertoire</h2>
              {/* <p>explore a diverse range of repertoire, including solo pieces, concertos, and chamber music, from different time periods.</p> */}
            
            </div>
          </div>
        </div>
        <div class="center">
          <div class="box my-10">
            <h2>Violin</h2>
          </div>
        </div>
        <div class="each">
          <div class="box">
            <div class="content">
         
              <h2>Music Reading & Ear Training:</h2>
              {/* <p>learn to read sheet music and understand musical notation.</p> */}
            </div>
          </div>
        </div>
        <div class="each">
          <div class="box">
            <div class="content">
              
              <h2>Bow Control & Articulation</h2>
              {/* <p>bowing techniques, dynamics, articulation, and phrasing to create expressive and nuanced performances.</p> */}
            </div>
          </div>
        </div>
      </div>
    

        </div>
     </div>
  );
};

export default Lesson;
