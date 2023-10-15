import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidbar/Sidebar";
import "./Header.css";
function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`${darkMode ? "header-dark" : null}`}>
      <a href="/" className="logo">
        <i className="fas fa-code"></i>
        <span>Omar Elsaid</span>
      </a>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;
