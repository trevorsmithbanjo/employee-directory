import React from "react";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} align-items-center`}>{props.children}</div>;
}

export default Row;
