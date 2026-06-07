function Toggle({ checked = false, onChange }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="toggle__track">
        <span className="toggle__thumb" />
      </span>
    </label>
  );
}

// @figma component-name: Slider
