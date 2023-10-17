function ProjectCard({ imageUrl, title, decription, darkMode }) {
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
          <a href="#" className="more-details">
            more-details
          </a>
        </strong>
      </div>
    </div>
  );
}

export default ProjectCard;
