import Input from "../UI/Input";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section class="contact-form">
      <form>
        <h2>Contact Us</h2>
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
          element="textarea"
          forLabel="message"
          label={"Message :"}
          type={"textarea"}
          id={"message"}
          name={"message"}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
