import { useUI } from "../../context/Uicontext";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const { darkMode } = useUI();
  return (
    <section className=" projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        <ProjectCard
          darkMode={darkMode}
          imageUrl={"./images/p1.jpg"}
          title={"REACT QUIZ APP"}
          decription={"Html, css, React.js and React hooks"}
        />
        <ProjectCard
          darkMode={darkMode}
          imageUrl={"./images/p2.jpg"}
          title={"MY PLACES APP"}
          decription={"Html, css, React.js, Node.js , mongoose and restful api"}
        />
        <ProjectCard
          darkMode={darkMode}
          imageUrl={"./images/p3.jpg"}
          title={"My shop | E-commerce"}
          decription={"Html, css, Node.js, ejs , mongoose "}
        />
      </div>
    </section>
  );
}

export default Projects;
