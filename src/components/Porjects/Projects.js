import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section class="projects" id="projects">
      <h2 class="title">Projects</h2>
      <div class="content">
        <ProjectCard
          imageUrl={"./images/p1.jpg"}
          title={"REACT QUIZ APP"}
          decription={"Html, css, React.js and React hooks"}
        />
        <ProjectCard
          imageUrl={"./images/p2.jpg"}
          title={"MY PLACES APP"}
          decription={"Html, css, React.js, Node.js , mongoose and restful api"}
        />
      </div>
    </section>
  );
}

export default Projects;
