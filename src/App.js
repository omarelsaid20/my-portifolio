import { Toaster, toast } from "sonner";

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
import { UiProvider } from "./context/Uicontext";

function App() {
  return (
    <div className="App">
      <UiProvider>
        <Backdrop />
        <Header>
          <Navbar />
          <Sidebar />
        </Header>
        <Main />
        <AboutMe />
        <Services />
        <Projects />
        <ContactInfo />
        <ContactForm />
        <Footer />
        <Toaster richColors />
      </UiProvider>
    </div>
  );
}

export default App;
