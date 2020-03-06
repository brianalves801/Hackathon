import React from "react";
import homeIcon from "../assets/Icons/Home.png";
import clockIcon from "../assets/fav/clock.svg";
import downloadIcon from "../assets/fav/download.svg";
import downloadHeart from "../assets/fav/Group.svg";
import yourList from "../assets/fav/Group34.svg";
import recommendedIcon from "../assets/fav/Group35.svg";
import settingsIcon from "../assets/fav/settings1.svg";
import avatarIcon from "../assets/fav/profile.svg";
import insightIcon from "../assets/fav/insights.svg";

const SpeakersPage = () => {
  return (
    <div className="speaker">
      <section className="speaker__profile-container">
        <div className="speaker__profile-container-avatar">
          <img className="speaker__avatar" src={avatarIcon} alt="avatar" />
        </div>

        <div className="speaker__speaker-wrapper">
          <div className="speaker__profile-speaker">Stewart Bloom</div>
          <div className="speaker__profile-options">
            <div className="speaker__profile-select-option">
              <div className="speaker__select">
                Professional Account &nbsp; >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="speaker__recommendation-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={recommendedIcon} alt="avatar" />
        </div>
        <div className="speaker__description-container">
          Recommendationed for you
        </div>

        <div className="speaker__rating-container">
          <span>7</span>
        </div>
      </section>

      <section className="speaker__your-list-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={yourList} alt="avatar" />
        </div>
        <div className="speaker__description-container">Your list</div>
        <div className="speaker__rating-container">
          <span>0</span>
        </div>
      </section>
      <section className="speaker__likes-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={downloadHeart} alt="avatar" />
        </div>
        <div className="speaker__description-container">Likes</div>
        <div className="speaker__rating-container">
          <span>0</span>
        </div>
      </section>
      <section className="speaker__history-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={clockIcon} alt="avatar" />
        </div>
        <div className="speaker__description-container">History</div>
        <div className="speaker__rating-container">
          <span>1</span>
        </div>
      </section>
      <section className="speaker__downloads-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={downloadIcon} alt="avatar" />
        </div>
        <div className="speaker__description-container">Downloads</div>
        <div className="speaker__rating-container">
          <span>7</span>
        </div>
      </section>
      <section className="speaker__insights-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={insightIcon} alt="avatar" />
        </div>
        <div className="speaker__description-container">Insights</div>
        <div className="speaker__rating-container">
          <span></span>
        </div>
      </section>
      <section className="speaker__settings-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src={settingsIcon} alt="avatar" />
        </div>
        <div className="speaker__description-container">Settings</div>
        <div className="speaker__rating-container">
          <span>></span>
        </div>
      </section>
    </div>
  );
};

export default SpeakersPage;
