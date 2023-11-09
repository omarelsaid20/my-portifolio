/* eslint-disable no-unused-expressions */
import { useUI } from "../../context/Uicontext";

function ProjectCard({ project }) {
  const { imageUrl, title, decription, codeLink, liveLink } = project;
  console.log(project);
  const { darkMode } = useUI();

  return (
    <div className={`${darkMode ? "project-card-dark" : null} project-card `}>
      <div className="project-image">
        <img src={imageUrl} alt="project1" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-category">
          <span>Technologies: </span>
          {decription}
        </p>
        <strong className="project-title">
          <a className="more-details" href={codeLink}>
            View Code <i className="fas fa-code"></i>
          </a>
          <a className="more-details live" href={liveLink}>
            Live
          </a>
        </strong>
      </div>
    </div>
  );
}

export default ProjectCard;
