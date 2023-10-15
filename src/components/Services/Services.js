import Card from "../UI/Card";

import "./Services.css";
function Services({ darkMode }) {
  return (
    <section
      class={`${darkMode ? "services-dark" : null} cards `}
      id="services"
    >
      <h2 class="title">Services</h2>
      <div class="content">
        <Card
          darkMode={darkMode}
          title="Frontend Development"
          decription={
            "I build websites using HTML, CSS, Javascript, React.js andmaterial ui"
          }
        >
          <i class="fas fa-code"></i>
        </Card>
        <Card
          darkMode={darkMode}
          title="Backend Development"
          decription={
            "Building website's backend with Node.js, express, mongodb"
          }
        >
          <i class="fas fa-server"></i>
        </Card>
        <Card
          darkMode={darkMode}
          title="Fullstack Development"
          decription={"Developing both client and server side "}
        >
          <i class="fas fa-laptop-code"></i>
        </Card>
      </div>
    </section>
  );
}

export default Services;
