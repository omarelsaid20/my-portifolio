function ProjectCard({ imageUrl, title, decription, darkMode }) {
  return (
    <div class={`${darkMode ? "project-card-dark" : null} project-card `}>
      <div class="project-image">
        <img src={imageUrl} alt="project1" />
      </div>
      <div class="project-info">
        <h3>{title}</h3>
        <p class="project-category">
          <span>Technologies: </span>
          {decription}
        </p>
        <strong class="project-title">
          <a href="#" class="more-details">
            more-details
          </a>
        </strong>
      </div>
    </div>
  );
}

export default ProjectCard;
