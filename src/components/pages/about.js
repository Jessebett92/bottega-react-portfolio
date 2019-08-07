import React from "react";
import BioPic from "../../../static/assets/images/bio/bottega.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + BioPic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        My passion for programming stems from when I attended Dixie State
        University. I first learned how computers could be used to solve real
        world problems and that led me to getting my first junior developer job
        at Ez HealthCare. Since then, I have learned full-stack development and
        I strive to gain a deeper understanding of the current technologies that
        applications are built with today.
      </div>
    </div>
  );
}
