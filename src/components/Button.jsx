export default function Button({
  label,
  className,
  onClick,
  smallButton = false,
}) {
  function handleButtonClick() {
    onClick();
  }

  if (smallButton === false) {
    return (
      <button className={className} onClick={handleButtonClick}>
        {label}
      </button>
    );
  } else {
    return (
      <div className={className} onClick={handleButtonClick}>
        <span className="material-symbols-outlined">close</span>
      </div>
    );
  }
}
