function InputField({ label = "Label", value = "", description = "Description", onChange }) {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input className="input-field__input" value={value} onChange={onChange} />
      <span className="input-field__description">{description}</span>
    </div>
  );
}

export default Input Field;
