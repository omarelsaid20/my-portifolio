import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidbar/Sidebar";
import "./Header.css";
function Header() {
  return (
    <header>
      <a href="/" className="logo">
        <i className="fas fa-code"></i>
        <span>Omar Elsaid</span>
      </a>
      <Navbar />
      <Sidebar />
    </header>
  );
}

export default Header;
