export default function AddButton({ label, className, onClick }) {
  function handleButtonClick() {
    onClick();
  }

  return (
    <button className={className} onClick={handleButtonClick}>
      {label}
    </button>
  );
}
