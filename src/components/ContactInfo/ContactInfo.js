import Card from "../UI/Card";

import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section class="contact" id="contact">
      <h2 class="title">Contact Information</h2>
      <div class="content">
        <Card title="Phone - whatsApp" decription="01012052557">
          <i class="fas fa-phone"></i>
          {/* < class="fab fa-whatsapp"></ i> */}
        </Card>
        <Card title="Email" decription="omar.aboobia@gmail.com">
          <i class="fas fa-envelope"></i>
        </Card>
      </div>
    </section>
  );
}

export default ContactInfo;
