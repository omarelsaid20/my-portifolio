import Card from "../UI/Card";

import "./ContactInfo.css";

function ContactInfo({ darkMode }) {
  return (
    <section class={`${darkMode ? "dark" : null} contact `} id="contact">
      <h2 class="title">Contact Information</h2>
      <div class="content">
        <Card
          darkMode={darkMode}
          title="Phone - whatsApp"
          decription="01012052557"
        >
          <i class="fas fa-phone"></i>
          {/* < class="fab fa-whatsapp"></ i> */}
        </Card>
        <Card
          darkMode={darkMode}
          title="Email"
          decription="omar.aboobia@gmail.com"
        >
          <i class="fas fa-envelope"></i>
        </Card>
      </div>
    </section>
  );
}

export default ContactInfo;
