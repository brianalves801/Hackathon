import React from "react";
import { Link } from "react-router-dom";

export default function InsightsNav() {
  return (
    <div className="insightnav">
      <div className="insightnav__title">Insights</div>
      <div className="insightnav__container">
        <Link
          to="/insights/general"
          className="insightnav__link insightnav__link-active"
        >
          General
        </Link>

        <Link to="/insights/general" className="insightnav__link">
          Video
        </Link>
      </div>
    </div>
  );
}
