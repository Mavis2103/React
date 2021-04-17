import React from "react";

const style = {
  fontSize: "11pt",
};
const Content = ({ children }) => {
  return (
    <div>
      <p style={style}>{children}</p>
    </div>
  );
};

export default Content;
