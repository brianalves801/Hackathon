import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/header">Page 2</Link>
      <Link to="/sample">Page 3</Link>
    </div>
  );
}
