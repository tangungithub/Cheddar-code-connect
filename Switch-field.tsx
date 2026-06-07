function SwitchField({ label = "Label", description = "Description", checked = false, onChange }) {
  return (
    <div className="switch-field">
      <div className="switch-field__text">
        <span className="switch-field__label">{label}</span>
        <span className="switch-field__description">{description}</span>
      </div>
      <input type="checkbox" className="switch-field__toggle" checked={checked} onChange={onChange} />
    </div>
  );
}
