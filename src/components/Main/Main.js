import "./Main.css";

function Main() {
  return (
    <section className="main">
      <div>
        <h2>
          Hello i'am Omar
          <br />
          <span>Fullstack developer</span>
        </h2>
        <h3>Building Websites</h3>
        <a href="./omar-elsaid-resume.pdf" download className="main-btn">
          Download CV <i className="fas fa-download"></i>
        </a>
        <div className="social-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/omar-elsaid-23612018a/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/omar7275"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/omarelsaid20">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/OmarElsaiyd">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
