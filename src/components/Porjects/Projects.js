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
    codeLink: "https://github.com/omarelsaid20/My_Places",
    LiveLink: "",
  },
  {
    id: 3,
    imageUrl: "./images/p4.jpg",
    title: "PIZZA RESTURANT",
    decription: "React.js, Redux/toolkit, React-router, Tailwind",
    codeLink: "https://github.com/omarelsaid20/Fast-Pizza-Resturant",
    LiveLink: "https://pizza-resturant-beta.vercel.app/",
  },
  {
    id: 4,
    imageUrl: "./images/p1.jpg",
    title: "REACT QUIZ APP",
    decription: "Html, css, React.js and React hooks",
    codeLink: "https://github.com/omarelsaid20/Quiz-app",
    LiveLink: "https://quiz-test-nu.vercel.app/",
  },
  {
    id: 5,
    imageUrl: "./images/p5.jpg",
    title: "WorldWise",
    decription: "React.js - Json-server - React-leaflet",
    codeLink: "https://github.com/omarelsaid20/worldwise-app",
    LiveLink: "https://world-wise-two.vercel.app/",
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
