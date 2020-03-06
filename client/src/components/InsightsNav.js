import React from "react";
import { Link } from "react-router-dom";

export default function InsightsNav() {
  return (
    <div className="insightnav__all">
      <div className="insightnav__title">Insights</div>
      <div className="insightnav__container">
        <Link
          to="/insights/general"
          className="insightnav__general insightnav__link-active"
        >
          <p className="insightnav__text">General</p>
        </Link>

        <Link to="/insights/general" className="insightnav__videos">
          <p className="insightnav__text">Video</p>
        </Link>
      </div>
    </div>
  );
}
