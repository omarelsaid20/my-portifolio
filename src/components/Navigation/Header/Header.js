import { useUI } from "../../../context/Uicontext";
import "./Header.css";

function Header({ children }) {
  const { darkMode } = useUI();
  return (
    <header className={`${darkMode ? "header-dark" : null}`}>
      <a href="/" className="logo">
        <i className="fas fa-code"></i>
        <span>Omar Elsaid</span>
      </a>
      {children}
    </header>
  );
}

export default Header;
