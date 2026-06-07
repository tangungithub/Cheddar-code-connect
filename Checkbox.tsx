function Checkbox({ label = "Label", description = "Description", checked = false, onChange }) {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" checked={checked} onChange={onChange} />
      <div className="checkbox__text">
        <span className="checkbox__label">{label}</span>
        <span className="checkbox__description">{description}</span>
      </div>
    </label>
  );
}
