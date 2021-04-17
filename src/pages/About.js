import React from "react";
import Title from "../components/Title";
import Avatar from "../components/Avatar";
import Content from "../components/Content";
import Button from "../components/Button";
import SubTitle from "../components/SubTitle";
import NumberProject from "../components/NumberProject";
import iconfire from "../assets/img/fire.png";
import iconcoffee from "../assets/img/coffee-cup.png";
import icongroup from "../assets/img/group.png";
import iconmedal from "../assets/img/medal.png";
const styleInfoBasic = {
  textAlign: "start",
  display: "flex",
  justifyContent: "space-between",
};
// const styleSkillInfo = {
//   display: "flex",
//   justifyContent: "space-around",
//   flexWrap: "wrap",
//   margin: "0 0 50px 0",
// };
const About = () => {
  return (
    <section>
      <div style={{ margin: "0 0 20px 0" }}>
        <Title content="About Me"></Title>
      </div>
      <div className="about">
        <div style={{ margin: "0 0 20px 0" }}>
          <Avatar size="120px" />
        </div>
        <div className="about__box">
          <div>
            <Content>
              I'm an sophomore at Vietnam-Korea University of Information and
              Communication Technology with the major in Computer Sciencem. I
              have experience in web site design and building and customization,
              also I am good at Nodejs.
            </Content>
            <div className="about__box--right__button">
              <Button>Download CV</Button>
            </div>
          </div>
          <div style={styleInfoBasic}>
            <div className="about__box--left__item">
              <SubTitle>Age</SubTitle>
              <p>21</p>
            </div>
            <div className="about__box--left__item">
              <SubTitle>Email</SubTitle>
              <p>taquansict@gmail.com</p>
            </div>
            <div className="about__box--left__item">
              <SubTitle>Phone</SubTitle>
              <p>0783587149</p>
            </div>
            <div className="about__box--left__item">
              <SubTitle>Address</SubTitle>
              <p>105 Dien Bien Phu, Da Nang</p>
            </div>
            <div className="about__box--left__item">
              <SubTitle>Language</SubTitle>
              <p>Vietnamese, English</p>
            </div>
          </div>
        </div>
      </div>
      <div className="completed">
        <NumberProject icon={iconfire} number="2" label="Projects completed" />
        <NumberProject icon={iconcoffee} number="10" label="Cup of coffee" />
        <NumberProject icon={icongroup} number="2" label="Satisfied clients" />
        <NumberProject icon={iconmedal} number="1" label="Nominees winner" />
      </div>
    </section>
  );
};

export default About;
