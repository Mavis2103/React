import React from "react";
import avatar from "../assets/img/avatar.JPG";

const Avatar = ({ size }) => {
  const css = {
    objectFit: "cover",
    width: size,
    height: size,
    borderRadius: "100%",
  };
  return (
    <section>
      <img style={css} src={avatar} alt="" />
    </section>
  );
};

export default Avatar;
