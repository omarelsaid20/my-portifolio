import React from "react";

import "./BackDrop.css";

const Backdrop = (props) => {
  return props.openBackDrop ? (
    <div
      className="backdrop"
      onClick={() => {
        props.setOpenSidebar(false);
        props.setOpenBackDrop(false);
      }}
    ></div>
  ) : null;
};

export default Backdrop;
