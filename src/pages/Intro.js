import React from "react";
import Avatar from "../components/Avatar";
import Title from "../components/Title";
import Content from "../components/Content";
import Button from "../components/Button";

const style = {
  display: "grid",
  placeItems: "center",
  height: "100vh",
  width: "100%",
  textAlign: "center",
  backgroundColor: "#353353",
  color: "#fff",
};

const Intro = () => {
  return (
    <section style={style}>
      <div>
        <Avatar size="100px" />
        <Title content="Trần Anh Quân" />
        <Content>I'm a Front-End Developer</Content>
        <div
          style={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button>Hire me</Button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
