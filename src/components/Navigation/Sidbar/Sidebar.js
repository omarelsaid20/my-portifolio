import { useState } from "react";
import "./Sidebar.css";
function Sidebar({ darkMode, setDarkMode }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div
        className={` sidebar ${openSidebar ? null : "close-sidebar"}
        ${darkMode ? "dark" : null}`}
      >
        <button className="closebtn" onClick={() => setOpenSidebar(false)}>
          ×
        </button>
        <a href="#about-me">About-me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button
          className="dark-mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
          {darkMode ? " light mode" : " Dark mode"}
        </button>
      </div>
      <button className="openbtn" onClick={() => setOpenSidebar(true)}>
        ☰
      </button>
    </>
  );
}

export default Sidebar;
