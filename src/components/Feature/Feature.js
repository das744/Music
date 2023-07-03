import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div id="features container">
      <section class="row">
        {/* img section */}
        <div class="col-lg-6 col-img order-1 mx-10"> </div>

        {/* content section */}
        <div class="col-lg-6 order-2 content ">
          <div class="container">
            <div class=" offset-md-1 ">
              <h6 style={{ color: "#ffffff", fontSize: "20px" }}>
                WHY TO CHOOES US
              </h6>
              <h1 style={{ color: "#061F45" }}>
                Best solution for your business
              </h1>
              {/* <p className="feature_content">
                Lorem ipsum dolor sit amet consectetur nisi necessitatibus
                repellat distinctio eveniet eaque fuga in cumque optio
                consectetur harum vitae debitis sapiente praesentium aperiam aut
              </p> */}

              <div class="feature d-flex ">
                <div class="iconbox me-3">
                  <i class="bx bxs-comment-edit"></i>
                </div>

                <div>
                  <h5> Private Lessons</h5>
                  <p>
                    One-on-one lessons provide personalized attention and allow
                    for focused instruction tailored to the student's skill
                    level and goals.
                  </p>
                </div>
              </div>
              <div class="feature d-flex">
                <div class="iconbox me-3">
                  <i class="bx bxs-user-circle"></i>
                </div>

                <div>
                  <h5>Group Lessons</h5>
                  <p>
                    Group lessons foster a collaborative and social learning
                    experience. Students can interact, play together, and learn
                    from one another.
                  </p>
                </div>
              </div>
              <div class="feature d-flex">
                <div class="iconbox me-3">
                  <i class="bx bxs-download"></i>
                </div>

                <div>
                  <h5>Online Lessons</h5>
                  <p>
                    Conducted through video conferencing platforms, online
                    lessons offer flexibility, convenience, and access to
                    instructors from around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
