function Button({ label = "Button", variant = "primary", disabled = false }) {
  return (
    <button className={`btn btn--${variant}`} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
