import "./Input.css";

function Input({ element, forLabel, label, type, id, name, value, onChange }) {
  return (
    <div className="form-group">
      <label forhtml={forLabel}>{label}</label>
      {element === "input" ? (
        <input
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
          id={id}
          name={name}
          required
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e)}
          id={id}
          name={name}
          rows="5"
          required
        ></textarea>
      )}
    </div>
  );
}

export default Input;
