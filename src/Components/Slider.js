import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Assets/Styles/Slider.css";
import image1 from "../Assets/Images/concert.jpg";
function Slider(props) {
  return (
    <div className="Slider">
      <Carousel autoPlay={true} showStatus={false}>
        {props.urls ? (
          props.urls.map((item) => (
            <div>
              <img src={item} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  );
}

export default Slider;
