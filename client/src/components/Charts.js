import React from "react";
import commentspertalk from "../assets/comments_per_talk.png";
import viewspertalk from "../assets/views_per_talk.png";
import topvideo from "../assets/topvideo.png";
import negrating from "../assets/Neg_Rating.png";
import posrating from "../assets/Pos_Rating.png";

export default function Charts() {
  return (
    <div className="chart">
      <img src={commentspertalk} alt="" srcset="" className="chart__graph" />
      <img src={viewspertalk} alt="" srcset="" className="chart__graph" />
      <img src={negrating} alt="" srcset="" className="chart__graph" />
      <img src={posrating} alt="" srcset="" className="chart__graph" />
      <img src={topvideo} alt="" srcset="" className="chart__graph" />
      <div className="chart__topwords">
        Speakers who are also members of the TED Brain Trust whose talks had
        over 1 million views used words like Nuclear, Art, Wind, Twin, Slate.
      </div>
    </div>
  );
}
