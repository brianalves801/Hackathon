import React from "react";
import Home from "../assets/Icons/Home.png";
import Search from "../assets/Icons/Search.png";
import User from "../assets/Icons/User.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer__all">
        <div className="footer__icons">
          <div className="footer__home">
            <div className="footer__homeicon">
              <Link to="/home">
                <img
                  className="footer__homepic"
                  alt="homepic"
                  width="28px"
                  height="28px"
                  src={Home}
                />
              </Link>
              <p>Home</p>
            </div>
          </div>
          <div className="footer__search">
            <div className="footer__searchicon">
              <Link to="/search">
                <img
                  className="footer__searchpic"
                  width="28px"
                  height="28px"
                  alt="searchpic"
                  src={Search}
                />
              </Link>
              <p>Search</p>
            </div>
          </div>
          <div className="footer__user">
            <div className="footer__usericon">
              <Link to="/profile">
                <img
                  className="footer__userpic"
                  width="30px"
                  height="30px"
                  alt="userpic"
                  src={User}
                />
              </Link>
              <p>Profile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
