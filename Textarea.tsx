function Textarea({ label = "Label", value = "", description = "Description", onChange }) {
  return (
    <div className="textarea">
      <label className="textarea__label">{label}</label>
      <textarea className="textarea__input" value={value} onChange={onChange} />
      <span className="textarea__description">{description}</span>
    </div>
  );
}
