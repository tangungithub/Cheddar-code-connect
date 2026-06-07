function IconButton({ icon = "x", variant = "filled", disabled = false }) {
  return (
    <button className={`icon-btn icon-btn--${variant}`} disabled={disabled}>
      <span className="icon">{icon}</span>
    </button>
  );
}
// @figma component-name: Icon Button
