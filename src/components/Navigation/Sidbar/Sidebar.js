import { useState } from "react";
import "./Sidebar.css";
function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div className={`sidebar ${openSidebar ? null : "close-sidebar"}`}>
        <button className="closebtn" onClick={() => setOpenSidebar(false)}>
          ×
        </button>
        <a href="#about-me">About-me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="openbtn" onClick={() => setOpenSidebar(true)}>
        ☰
      </button>
    </>
  );
}

export default Sidebar;
