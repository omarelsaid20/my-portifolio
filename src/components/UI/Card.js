import "./Card.css";

function Card({ title, decription, children, darkMode }) {
  return (
    <div class={`${darkMode ? "card-dark" : null} card `}>
      <div class="icon">{children}</div>
      <div class="info">
        <h3>{title}</h3>
        <p>{decription}</p>
      </div>
    </div>
  );
}

export default Card;
