import React from "react";

const ParallaxLayer = ({ src, speed }) => {
  const styles = {
    backgroundImage: `url(${src})`
  };

  return (
    <div
      className="absolute inset-0 bg-center bg-no-repeat bg-cover"
      style={styles}
      data-speed={speed}
    ></div>
  );
};

export default ParallaxLayer;
