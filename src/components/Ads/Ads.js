import React from "react";
import "./Ads.css";
const Ads = () => {
  return (
    <div className=" main-container mt-5 ">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="quality2">Our Queality</h2>
          </div>
          <div className="col">
            {" "}
            <iframe
              className="img-fluid rounded mt-4"
              width="356px"
              height="300px"
              src="https://www.youtube.com/embed/IBFpdKskBzM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="https://i.ibb.co/pP3vJVT/aaa.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
