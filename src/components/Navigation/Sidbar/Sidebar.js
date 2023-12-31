import { useUI } from "../../../context/Uicontext";
import "./Sidebar.css";

function Sidebar() {
  const {
    darkMode,
    setDarkMode,
    openSidebar,
    setOpenSidebar,
    setOpenBackDrop,
  } = useUI();
  return (
    <>
      <div
        className={` sidebar ${openSidebar ? null : "close-sidebar"}
        ${darkMode ? "dark" : null}`}
      >
        <button
          className="closebtn"
          onClick={() => {
            setOpenBackDrop(false);
            setOpenSidebar(false);
          }}
        >
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
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
          {darkMode ? " light mode" : " Dark mode"}
        </button>
      </div>

      <button
        className="openbtn"
        onClick={() => {
          setOpenBackDrop(true);
          setOpenSidebar(true);
        }}
      >
        ☰
      </button>
    </>
  );
}

export default Sidebar;
