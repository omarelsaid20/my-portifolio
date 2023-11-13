import { useUI } from "../../../context/Uicontext";
import { toast } from "sonner";
import "./Navbar.css";
import MyIcon from "../../UI/MyIcon";

function Navbar() {
  const { darkMode, setDarkMode } = useUI();
  return (
    <>
      <nav className="navigation">
        <a className="nav-link" href="#about-me">
          About me
        </a>
        <a className="nav-link" href="#services">
          Services
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
        <a
          href="https://github.com/omarelsaid20"
          className="nav-btn"
          rel="noreferrer"
        >
          Github <i className="fab fa-github"></i>
        </a>
        <button
          className="dark-mode-btn-nav"
          onClick={() => {
            setDarkMode(!darkMode);
            toast("Dark mode toggled", {
              duration: 5000,
              icon: <MyIcon darkMode={darkMode} />,
            });
          }}
        >
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
