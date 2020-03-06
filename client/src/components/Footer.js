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
                <img className="footer__homepic" alt="homepic" src={Home} />
              </Link>
            </div>
          </div>
          <div className="footer__search">
            <div className="footer__searchicon">
              <Link to="/search">
                <img
                  className="footer__searchpic"
                  alt="searchpic"
                  src={Search}
                />
              </Link>
            </div>
          </div>
          <div className="footer__user">
            <div className="footer__usericon">
              <Link to="/profile">
                <img className="footer__userpic" alt="userpic" src={User} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
