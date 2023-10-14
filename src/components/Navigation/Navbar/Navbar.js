import "./Navbar.css";

function Navbar() {
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
      </nav>
    </>
  );
}

export default Navbar;
