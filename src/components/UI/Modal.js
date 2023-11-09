import { useUI } from "../../context/Uicontext";
import "./Modal.css";

function ModalComp({ imageUrl, title }) {
  const { openModal, setOpenModal } = useUI();
  return (
    <div className={`modal ${!openModal ? "close-modal" : ""} `}>
      <div className="modal-project-title">
        <h3>{title}</h3>
      </div>
      <div className="modal-content">
        <div className="modal-project-image">
          <img src="./images/p1.jpg" alt="project1" />
        </div>
        <div className="modal-project-content">
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
          <h1>content</h1>
        </div>
      </div>
      <div className="modal-footer">
        <button onClick={() => setOpenModal(false)} className="close-button">
          Close
        </button>
        <button className="live-button"> Live Demo</button>
      </div>
    </div>
  );
}

export default ModalComp;
