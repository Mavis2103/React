import React from "react";

const style = {
  fontSize: "24pt",
  fontWeight: "bold",
};

const Title = ({ content }) => {
  return <p style={style}>{content}</p>;
};

export default Title;
