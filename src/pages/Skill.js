import React from "react";
import Title from "../components/Title";
import Content from "../components/Content";

const style = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};
const styleTitleSkill = {
  display: "inline-block",
  color: "#fff",
  fontWeight: "600",
  padding: "5px 10px",
  borderRadius: "12px",
  margin: "0 0 10px 0",
};
const Skill = () => {
  return (
    <section style={{ margin: "0 0 50px 0" }}>
      <div style={{ margin: "0 0 20px 0" }}>
        <Title content="Skills" />
      </div>
      <div style={style}>
        <div className="skill__item">
          <div>
            <div className="bg--red" style={styleTitleSkill}>
              <Content>Front-End</Content>
            </div>
          </div>
          <div>
            <Content>
              <p>- Html, Scss</p>
              <p>- Javascript</p>
              <p>- React </p>
              <p>- Bootstrap, Tailwind </p>
              <p>- Dart(Flutter)</p>
            </Content>
          </div>
        </div>
        <div className="skill__item">
          <div>
            <div className="bg--red" style={styleTitleSkill}>
              <Content>UI/UX</Content>
            </div>
          </div>
          <div>
            <Content>
              <p>- Figma</p>
              <p>- Adobe XD</p>
            </Content>
          </div>
        </div>
        <div className="skill__item">
          <div>
            <div className="bg--red" style={styleTitleSkill}>
              <Content>Back-end</Content>
            </div>
          </div>
          <div>
            <Content>
              <p>- Nodejs(Expressjs)</p>
              <p>- Mysql, MongoDB</p>
            </Content>
          </div>
        </div>
        <div className="skill__item">
          <div>
            <div className="bg--blue" style={styleTitleSkill}>
              <Content>Office Skills</Content>
            </div>
          </div>
          <div>
            <Content>
              <p>- Word</p>
              <p>- PowerPoint, Canva</p>
            </Content>
          </div>
        </div>
        <div className="skill__item">
          <div>
            <div className="bg--blue" style={styleTitleSkill}>
              <Content>Personal Skills</Content>
            </div>
          </div>
          <div>
            <Content>
              <p>- Team Working</p>
              <p>- Sports</p>
            </Content>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
