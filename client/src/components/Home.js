import React from "react";
import homeImg from "../assets/homescreen.png";

export default function Home() {
  return (
    <div className="home">
      <img src={homeImg} alt="home screen" srcset="" className="home__img" />
    </div>
  );
}
