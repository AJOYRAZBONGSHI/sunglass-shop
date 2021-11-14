import React from 'react';
import "./SectionOne.css"

const SectionOne = () => {
    return (
      <div className="background mt-5 ">
        <div className="container">
          <div className="row">
            <div className=" col-sm-12 col-md-6 col-lg-6 mt-5">
              <img
                className="one-side-girl img-fluid "
                src="https://image.freepik.com/free-photo/surprised-amused-attractive-girl-raising-hands-sideways-happy-looking-excited-wearing-sunglasses_176420-31044.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 mt-lg-5 mt-md-2">
              <p className="paragraph">
                {" "}
                <span className="about-text">O</span>ur manufacturing company
                is located in China and has more than 25 years of experience.
                Our team is made up of more than 500 personnel that consist of
                qualified technicians and skilled workers. Our manufacturing
                lines has been separated into three major lines: acetate, metal,
                and injection. Acetate: level quality material with
                newest updated computer system to process with 99.9 percent
                precision supported and supervised by experienced staff and
                quality control division. Metal: titanium, stainless steel,
                copper with high quality plating and painting system handling
                nontoxic, and nickel free. Injection: plastic
                injection line with high quality , PC and TR-90 memorial
                Plastic with professional spray and computerized painting
                system.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SectionOne;