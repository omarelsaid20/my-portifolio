import "./Input.css";

function Input({ element, forLabel, label, type, id, name }) {
  return (
    <div className="form-group">
      <label forhtml={forLabel}>{label}</label>
      {element === "input" ? (
        <input type={type} id={id} name={name} required />
      ) : (
        <textarea id={id} name={name} rows="5" required></textarea>
      )}
    </div>
  );
}

export default Input;
