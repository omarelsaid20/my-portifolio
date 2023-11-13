import "./Card.css";

function Card({ title, decription, children, darkMode }) {
  return (
    <div className={`${darkMode ? "card-dark" : ''} card `}>
      <div className="icon">{children}</div>
      <div className="info">
        <h3>{title}</h3>
        <p>{decription}</p>
      </div>
    </div>
  );
}

export default Card;
