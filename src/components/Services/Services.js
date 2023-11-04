import { useUI } from "../../context/Uicontext";
import Card from "../UI/Card";

import "./Services.css";
function Services() {
  const { darkMode } = useUI();
  return (
    <section
      className={`${darkMode ? "services-dark" : null} cards`}
      id="services"
    >
      <h2 className="title">Services</h2>
      <div className="content">
        <Card
          darkMode={darkMode}
          title="Frontend Development"
          decription={
            "I build websites using HTML, CSS, Javascript, React.js andmaterial ui"
          }
        >
          <i className="fas fa-code"></i>
        </Card>
        <Card
          darkMode={darkMode}
          title="Backend Development"
          decription={
            "Building website's backend with Node.js, express, mongodb"
          }
        >
          <i className="fas fa-server"></i>
        </Card>
        <Card
          darkMode={darkMode}
          title="Fullstack Development"
          decription={"Developing both client and server side "}
        >
          <i className="fas fa-laptop-code"></i>
        </Card>
      </div>
    </section>
  );
}

export default Services;
