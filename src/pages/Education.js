import React from "react";
import Title from "../components/Title";
import Content from "../components/Content";
import SubTitle from "../components/SubTitle";

const styleTime = {
  color: "#fff",
  display: "inline-block",
  fontWeight: "600",
  padding: "5px 10px",
  backgroundColor: "#6C6CE5",
  borderRadius: "12px 12px 0 0",
};
const styleContent = {
  margin: "0 0 20px 0",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  borderRadius: "0 20px 20px",
};
const Education = () => {
  return (
    <section style={{ margin: "0 0 50px 0" }}>
      <div style={{ margin: "0 0 20px 0" }}>
        <Title content="Education" />
      </div>
      <section className="grid">
        <div>
          <div style={styleTime}>
            <Content>2019 - Present</Content>
          </div>
          <div style={styleContent}>
            <SubTitle>
              Vietnam - Korea University of Information and Communication
              Technology
            </SubTitle>
            <Content>Computer Science Engineering</Content>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Education;
