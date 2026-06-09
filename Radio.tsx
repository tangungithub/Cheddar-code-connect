function Radio({ label = "Label", description = "Description", checked = false, name, onChange }) {
  return (
    <label className="radio">
      <input type="radio" className="radio__input" checked={checked} name={name} onChange={onChange} />
      <div className="radio__text">
        <span className="radio__label">{label}</span>
        <span className="radio__description">{description}</span>
      </div>
    </label>
  );
}
