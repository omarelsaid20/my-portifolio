import { useState } from "react";
import "./App.css";
import AboutMe from "./components/About-me/About-me";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Navigation/Header/Header";
import Projects from "./components/Porjects/Projects";
import Services from "./components/Services/Services";
import "./responsive.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
      <AboutMe darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <ContactInfo darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
