import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="d-flex pb-5 pe-5 ps-5">
      <div>
        <Link to= "/" className="nav-link active">
          Home &nbsp; 
        </Link>
      </div>
      <div>/ About Us</div>
    </div>
  );
}

export default AboutUs;
