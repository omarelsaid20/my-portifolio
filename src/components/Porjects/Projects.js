import { useUI } from "../../context/Uicontext";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    imageUrl: "./images/p3.jpg",
    title: "My shop | E-commerce",
    decription: "Html, css, Node.js, ejs , mongoose ",
    codeLink: "",
    LiveLink: "",
  },
  {
    id: 2,
    imageUrl: "./images/p2.jpg",
    title: "MY PLACES APP",
    decription: "Html, css, React.js, Node.js , mongoose and restful api",
    codeLink: "",
    LiveLink: "",
  },
  {
    id: 3,
    imageUrl: "./images/p4.jpg",
    title: "PIZZA RESTURANT",
    decription: "React.js, Redux/toolkit, React-router, Tailwind",
    codeLink: "asda",
    LiveLink: "",
  },
  {
    id: 4,
    imageUrl: "./images/p1.jpg",
    title: "REACT QUIZ APP",
    decription: "Html, css, React.js and React hooks",
    codeLink: "",
    LiveLink: "",
  },
];
function Projects() {
  return (
    <section className=" projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
