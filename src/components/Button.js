import React from "react";

const style = {
  width: "150px",
  height: "40px",
  // margin: "auto",
  borderRadius: "36px",
  fontSize: "12pt",
  fontWeight: "bold",
  backgroundColor: "#FF4C60",
  color: "white",
  display: "grid",
  placeItems: "center",
};

const Button = ({ children }) => {
  return (
    <div style={style}>
      <p>{children}</p>
    </div>
  );
};

export default Button;
