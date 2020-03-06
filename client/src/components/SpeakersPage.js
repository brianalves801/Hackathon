import React from "react";

const SpeakersPage = () => {
  return (
    <div className="speaker">
      <section className="speaker__profile-image-container">
        <img className="speaker__avatar" src="" alt="avatar" />
      </section>
      <section className="speaker__recommendation-container">
        <div className="speaker__icon-image-container">
          <img className="icon" src="" alt="avatar" />
        </div>
        <div className="speaker__description-container">
          Recommendationed for you
        </div>
        <div className="speaker__rating-container">
          <span>7</span>
        </div>
      </section>
      <section className="speaker__your-list-container"></section>
      <section className="speaker__likes-container"></section>
      <section className="speaker__history-container"></section>
      <section className="speaker__downloads-container"></section>
      <section className="speaker__insights-container"></section>
      <section className="speaker__settings-container"></section>
    </div>
  );
};

export default SpeakersPage;
