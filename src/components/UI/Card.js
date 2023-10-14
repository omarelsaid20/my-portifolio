import "./Card.css";

function Card({ title, decription, children }) {
  return (
    <div class="card">
      <div class="icon">{children}</div>
      <div class="info">
        <h3>{title}</h3>
        <p>{decription}</p>
      </div>
    </div>
  );
}

export default Card;
