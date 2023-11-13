import { useUI } from "../../context/Uicontext";
import { toast } from "sonner";
import Input from "../UI/Input";

import "./ContactForm.css";
import { useState } from "react";
import Loader from "../UI/Loader";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode } = useUI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      e.preventDefault();
      toast.error("Please fill all the fields");
      return;
    }
    const data = {
      name,
      email,
      phone,
      message,
    };

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (!response.ok) {
        responseData.map((err) => toast.error(`Error sending data: ${err}`));
        throw new Error("SomeThing went Wrong");
      }

      toast.success("Message sent successfully");
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending data:", error);
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`${
        darkMode ? "contact-form-dark" : ""
      } contact-form section-padding`}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            element="input"
            forLabel="email"
            label={"E-mail :"}
            type={"email"}
            id={"email"}
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            element="input"
            forLabel="phone"
            label={"Phone :"}
            type={"text"}
            id={"phone"}
            name={"phone"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            element="textarea"
            forLabel="message"
            label={"Message :"}
            type={"textarea"}
            id={"message"}
            name={"message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {!isLoading ? (
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              {!isLoading ? "Submit" : "Submitting..."}
            </button>
          ) : (
            <Loader />
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
