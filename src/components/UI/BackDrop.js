import React from "react";

import "./BackDrop.css";
import { useUI } from "../../context/Uicontext";

const Backdrop = () => {
  const { openBackDrop, setOpenBackDrop, setOpenSidebar } = useUI();
  return openBackDrop ? (
    <div
      className="backdrop"
      onClick={() => {
        setOpenSidebar(false);
        setOpenBackDrop(false);
      }}
    ></div>
  ) : null;
};

export default Backdrop;
