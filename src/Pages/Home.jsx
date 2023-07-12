import React from "react";
import Footer from "../Components/Footer";

const Home = ({ inactive, toggleOff }) => {
  return (
    <>
      <div>
        <div
          className={`content ${inactive ? "inactive" : ""} ${
            toggleOff ? "toggleoff" : ""
          }`}
        >
          <div className="container">
            <div className="heading d-flex my-2">
              <h1>WELCOME TO Elakkiya</h1>
              <img
                src={
                  "https://img.icons8.com/3d-fluency/94/null/student-male.png"
                }
                style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                alt=""
              />
            </div>
            <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
              <p>
                Elakkiya is an edu-tech company offering online courses,
                tutoring, test preparation, and career development programs. Our
                goal is to make learning accessible to everyone by partnering
                with leading institutions and experts. With our cutting-edge
                technology and personalized approach, we provide individual
                attention and support to help each student achieve their full
                potential. Join us today to experience the difference of
                high-quality education.
              </p>
              <img
                src={
                  "https://aws.wideinfo.org/elivenet.com/wp-content/uploads/2017/08/07192710/gif2_1200x675_v2-0-1.gif"
                }
                id="homeImage"
                alt=""
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
