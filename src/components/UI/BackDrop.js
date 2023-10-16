import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./BackDrop.css";

const Backdrop = (props) => {
  const [closeBackdrop, setCloseBackdrop] = useState(true);

  return closeBackdrop ? (
    <div className="backdrop" onClick={() => setCloseBackdrop(false)}></div>
  ) : null;
};

export default Backdrop;
