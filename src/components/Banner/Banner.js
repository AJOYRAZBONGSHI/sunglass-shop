import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"




const Banner = () => {



    return (
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://cdn.shopify.com/s/files/1/1019/3345/articles/Milan_Hat_Wheat_lifetsyle_smaller_69e44647-f7c8-4cbc-a543-0fb9a55b8ea8_2048x2048.jpg?v=1620139772"
              style={{ height: "100vh" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 className="h5_banner">Hello Everyone</h5>
              <p className="p_tag_banner">
                {" "}
                You will find awesome sunglass on this website. Sunglass are
                much more efficient.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100 "
              src="https://cdn.lindberg.com/media/xu0lrfcu/u_m8906_c.jpg"
              style={{ height: "100vh" }}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5 className="h5_banner">World Best Sunglass here.</h5>
              <p className="p_tag_banner">
                You can order the sunglass if you want and you can order online.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-bloc w-100"
              src="https://images.indianexpress.com/2019/08/sunglasses759.jpg"
              style={{ height: "100vh" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5 className="h5_banner">
                Happy Shopping withe Digital Sunglass Shop
              </h5>
              <p className="p_tag_banner">
               Happy customer, everyone likes our service very much.
               Happy customer, everyone likes our service very much.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;