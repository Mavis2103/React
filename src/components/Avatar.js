import React from "react";

const Avatar = ({ size }) => {
  const css = {
    width: size,
    height: size,
    borderRadius: "100%",
  };
  return (
    <section>
      <img
        style={css}
        src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        alt=""
      />
    </section>
  );
};

export default Avatar;
