import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main_footer2">
      <div className="main_footer2 pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <span className="icon">
                <i className="m-2 fas fa-tablets"></i>
              </span>
              Lete Products
              <div className="info mt-3">
                <span className="details">
                  <i className="m-2 fas fa-map-marker-alt"></i>Dhaka,Bangladesh
                </span>
                <br />
                <span className="details">
                  <i className="m-2 fas fa-phone-alt"></i> +880161212121
                </span>
                <br />
                <span className="details">
                  <i className="m-2 fas fa-at"></i> admin@adimn.gmail.com
                </span>
                <br />
              </div>
            </div>

            <div className="col">
              <span className="icon">
                <i className="m-2 far fa-address-card"></i>
              </span>
              About
              <div className="row mt-3">
                <div className="col">
                  <img
                    width="100px"
                    className="rounded"
                    src="https://image.freepik.com/free-photo/portrait-surprised-girl-sunglasses-holding-cup_171337-9933.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <p className="pasa">
                    2021 Hot Selling Custom Logo Brand Retro Sports Fashionable
                    Driving Polarized Sunglasses Wholesale For Men.
                  </p>
                </div>

                <div className="col">
                  <img
                    width="100px"
                    className="rounded"
                    src="https://thumbs.dreamstime.com/b/young-girl-happy-looking-forward-to-finding-something-wear-sunglasses-reflection-light-sunshine-concept-summer-110416671.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <p className="pasa">
                    HA20047 Fashion Sunglasses Men Acetate Optical Eyeglass
                    Frame Oversize Eyeglasses Custom Logo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <span className="icon">
                <i className="m-2 fas fa-question-circle"></i>
              </span>
              Information
              <ul className="main_list mt-3">
                <li className="list">About</li>
                <li className="list">Products</li>
                <li className="list">Contact</li>
                <li className="list">Help & Support</li>
              </ul>
            </div>

            <div className="col">
              <span className="icon">
                <i className="m-2 fas fa-address-card"></i>
              </span>
              Queality
              <div className="row mt-3">
                <div className="col-6">
                  <img
                    width="100px"
                    src=" https://image.freepik.com/free-photo/portrait-surprised-girl-sunglasses-holding-cup_171337-9933.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    width="100px"
                    src="https://thumbs.dreamstime.com/b/young-girl-happy-looking-forward-to-finding-something-wear-sunglasses-reflection-light-sunshine-concept-summer-110416671.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    width="100px"
                    src="https://thumbs.dreamstime.com/b/young-girl-happy-looking-forward-to-finding-something-wear-sunglasses-reflection-light-sunshine-concept-summer-110416671.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <img
                    width="100px"
                    src="https://image.freepik.com/free-photo/portrait-surprised-girl-sunglasses-holding-cup_171337-9933.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="logos">
              <i className="m-2 fab fa-facebook"></i>
              <i className="m-2 fab fa-instagram"></i>
              <i className="m-2 fab fa-linkedin-in"></i>
              <i className="m-2 fab fa-twitter"></i>
            </div>
          </div>

          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
