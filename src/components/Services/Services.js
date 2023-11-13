import { useUI } from "../../context/Uicontext";
import Card from "../UI/Card";

import "./Services.css";
function Services() {
  const { darkMode } = useUI();
  return (
    <section
      className={`${darkMode ? "services-dark" : ""} cards section-padding`}
      id="services"
    >
      <h2 className="title">Services</h2>
      <div className="content">
        <Card
          darkMode={darkMode}
          title="Frontend Development"
          decription={
            "Building websites using HTML, CSS, Javascript, React.js, Next.js, Tailwindcss and Material ui"
          }
        >
          <i className="fas fa-code"></i>
        </Card>
        <Card
          darkMode={darkMode}
          title="Backend Development"
          decription={
            "Building website's backend with Node.js, express, Nest.js, mongodb"
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
