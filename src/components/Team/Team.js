import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div>
        <section className='divider'>
        <h2>Ready to take A Lesson ? </h2>
          
      </section>
         <section id="team">
      <div class="team_container">
        <div class="row mb-5">
          <div class="col-md-8 mx-auto text-center">
            <h6 style={{color:"#047ea8", fontSize:'20px'}}>TEAM</h6>
            <h1 style= {{color:"#061F45" }}>Meet Our Crew Members</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur nisi necessitatibus
              repellat distinctio eveniet eaque fuga in cumque optio consectetur
              harum vitae debitis sapiente praesentium aperiam aut
            </p>
          </div>
        </div>
        {/* row start */}
        <div class="row text-center g-4 px-100">
          <div class="col-lg-3 col-sm-6">
            <div class="team-member card-effect">
              <img src="./img/music-teacher_3.jpg" alt="" />
              <h5 class="mb-0 mt-4">Alan</h5>
              <p>Guitar Teacher</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="team-member card-effect">
            <img src="./img/music-reacher_3" alt="" />
              <h5 class="mb-0 mt-4"> David  </h5>
              <p>Guitar Teacher</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="team-member card-effect">
            <img src="./img/music-teacher_3.jpg" alt="" />
              <h5 class="mb-0 mt-4">Piyali</h5>
              <p>Violin Teacher</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="team-member card-effect">
            <img src="./img/music-teacher_3.jpg" alt="" />
              <h5 class="mb-0 mt-4">Amanda</h5>
              <p>Violin Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Team