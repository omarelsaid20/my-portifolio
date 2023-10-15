import "./About-me.css";

function AboutMe({ darkMode }) {
  return (
    <section class={`${darkMode ? "dark" : null} about-me `} id="about-me">
      <div class="about-me-img">
        <img src="./images/omar-logo.jpg" alt="some dummy" />
      </div>
      <div class="about-me-info">
        <h1>About Me</h1>
        <p class="overview">
          Full-Stack Developer with 1 years of experience designing and
          implementing innovative web applications. Proficient in front-end
          (HTML5, CSS3, JavaScript, React.js) and back-end (Node.js, Express.js,
          databases) development. Skilled in deploying applications using AWS,
          Docker, and Jenkins.
        </p>
        <div class="personal-info">
          <div class="titels">
            <p>
              <i class="fas fa-caret-right"></i>Name :
            </p>
            <p>
              <i class="fas fa-caret-right"></i>Date of birth :
            </p>
            <p>
              <i class="fas fa-caret-right"></i>Address :
            </p>
            <p>
              <i class="fas fa-caret-right"></i>E-mail:
            </p>
            <p>
              <i class="fas fa-caret-right"></i>Phone:
            </p>
          </div>
          <div>
            <p>Omar Elsaid Ahmed</p>
            <p>July 5, 1998</p>
            <p>Damietta city, Egypt</p>
            <p>omar.aboobia@gmail.com</p>
            <p>01012052557</p>
          </div>
        </div>
        <hr />
        <div class="education">
          <h3>
            Education <i class="fas fa-graduation-cap"></i>:
          </h3>
          <p>
            Bachelor Degree of Computer Science, Mansoura University
            <br />
            2016 - 2020
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default AboutMe;
