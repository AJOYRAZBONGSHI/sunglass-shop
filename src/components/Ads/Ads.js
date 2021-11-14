import React from "react";
import "./Ads.css";
const Ads = () => {
  return (
    <div className=" main-container mt-5 ">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="quality2">About us</h2>
          </div>
          <div className="col">
            {" "}
            <img
              className="img-fluid"
              src="https://thumbs.dreamstime.com/b/young-girl-happy-looking-forward-to-finding-something-wear-sunglasses-reflection-light-sunshine-concept-summer-110416671.jpg"
              alt=""
            />
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-photo/portrait-surprised-girl-sunglasses-holding-cup_171337-9933.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
