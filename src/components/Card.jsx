import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Card({ name, imgSrc, branch, linkedIn, github }) {
  return (
    <div>
      <div>
        <img src={imgSrc} alt="photo"></img>
      </div>
      <div>{name}</div>
      <div>{branch}</div>
      <div className="flex justify-between items-center">
        <FaLinkedin />
        <FaGithub />
      </div>
    </div>
  );
}

export default Card;
