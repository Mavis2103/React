import React from "react";
const style = {
  // fontSize: "28pt",
  fontWeight: "600",
  margin: "0 0 5px 0",
};
const SubTitle = ({ children }) => {
  return <p style={style}>{children}</p>;
};

export default SubTitle;
