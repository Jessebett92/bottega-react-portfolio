import React from "react";
import BioPic from "../../../static/assets/images/bio/bio.jpg";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tortor at risus
        viverra adipiscing at in tellus. Cras sed felis eget velit aliquet.
        Gravida dictum fusce ut placerat orci nulla pellentesque. Rhoncus dolor
        purus non enim praesent elementum facilisis. Commodo nulla facilisi
        nullam vehicula ipsum a arcu. Quam quisque id diam vel. Felis imperdiet
        proin fermentum leo vel orci porta non. Mattis pellentesque id nibh
        tortor id aliquet lectus proin. Etiam tempor orci eu lobortis elementum
        nibh.
      </div>
    </div>
  );
}
