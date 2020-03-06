import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
    </div>
  );
}
