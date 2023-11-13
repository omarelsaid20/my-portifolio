import { useUI } from "../../context/Uicontext";
import Card from "../UI/Card";

import "./ContactInfo.css";

function ContactInfo() {
  const { darkMode } = useUI();
  return (
    <section
      className={`${darkMode ? "dark" : ""} contact section-padding`}
      id="contact"
    >
      <h2 className="title">Contact Information</h2>
      <div className="content">
        <Card
          darkMode={darkMode}
          title="Phone - whatsApp"
          decription="01012052557"
        >
          <i className="fas fa-phone"></i>
          {/* < className="fab fa-whatsapp"></ i> */}
        </Card>
        <Card
          darkMode={darkMode}
          title="Email"
          decription="omar.aboobia@gmail.com"
        >
          <i className="fas fa-envelope"></i>
        </Card>
      </div>
    </section>
  );
}

export default ContactInfo;
