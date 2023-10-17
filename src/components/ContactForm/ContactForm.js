import Input from "../UI/Input";
import "./ContactForm.css";

function ContactForm({ darkMode }) {
  return (
    <section
      className={`${darkMode ? "contact-form-dark" : null} contact-form `}
    >
      <div className="shape">
        <img src="./images/Contact-us.png" alt="dummy" />
      </div>
      <div className="form-sec">
        <form>
          <h2>Contact me</h2>
          <Input
            element="input"
            forLabel="name"
            label={"Name :"}
            type={"text"}
            id={"name"}
            name={"name"}
          />
          <Input
            element="input"
            forLabel="email"
            label={"E-mail :"}
            type={"email"}
            id={"email"}
            name={"email"}
          />
          <Input
            element="input"
            forLabel="subject"
            label={"Subject :"}
            type={"text"}
            id={"subject"}
            name={"subject"}
          />
          <Input
            element="textarea"
            forLabel="message"
            label={"Message :"}
            type={"textarea"}
            id={"message"}
            name={"message"}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
