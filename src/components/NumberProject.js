import React from "react";
import Content from "../components/Content";
import Title from "../components/Title";

const styleIcon = {
  width: "40px",
  height: "40px",
  margin: "0 10px 0 0",
};
const NumberProject = ({ icon, number, label }) => {
  return (
    <div style={{ display: "flex", margin: "0 0 20px 0" }}>
      <div>
        <img style={styleIcon} src={icon} alt="" />
      </div>
      <div>
        <Title content={number} />
        <Content>{label}</Content>
      </div>
    </div>
  );
};

export default NumberProject;
