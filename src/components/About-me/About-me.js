import "./About-me.css";

function AboutMe() {
  return (
    <section class="about-me" id="about-me">
      <div class="about-me-img">
        <img src="./images/omar-logo.jpg" alt="some dummy" />
      </div>
      <div class="about-me-info">
        <h1>About Me</h1>
        <p class="overview">
          Highly skilled and versatile full-stack developer with one years of
          experience in designing and implementing innovative web applications.
          Proficient in both front-end and back-end development, adept at
          leveraging modern technologies to deliver robust and user-friendly
          solutions. Strong problem-solving abilities and a passion for creating
          efficient, scalable, and high-performance software systems
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
    </section>
  );
}

export default AboutMe;
