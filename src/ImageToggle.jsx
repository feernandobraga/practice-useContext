import React, { useContext, useRef } from "react";
import { GlobalContext } from "./GlobalState";

const ImageToggle = () => {
  const imageRef = useRef(null);

  const { guy, girl, clicks, incrementClicks } = useContext(GlobalContext); // reading the value from the context API

  const handleOnMouseOver = () => {
    // console.log(imageRef.current); // .current gets the HTML element
    imageRef.current.src = girl;
    incrementClicks();
  };

  const handleOnMouseOut = () => {
    imageRef.current.src = guy;
    incrementClicks();
  };

  return (
    <>
      <h1>Image Toggle Component</h1>
      <p>Number of clicks: {clicks}</p>
      <img
        src={guy}
        alt="man-avatar"
        ref={imageRef}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      />
    </>
  );
};

export default ImageToggle;
