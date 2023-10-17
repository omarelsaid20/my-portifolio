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
import Navbar from "./components/Navigation/Navbar/Navbar";
import Sidebar from "./components/Navigation/Sidbar/Sidebar";
import "./responsive.css";
import Backdrop from "./components/UI/BackDrop";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="App">
      <Backdrop
        openBackDrop={openBackDrop}
        setOpenBackDrop={setOpenBackDrop}
        setOpenSidebar={setOpenSidebar}
      />

      <Header darkMode={darkMode}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setOpenBackDrop={setOpenBackDrop}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
      </Header>
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
