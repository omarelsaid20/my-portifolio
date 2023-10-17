import "./Header.css";

function Header({ children, darkMode }) {
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
