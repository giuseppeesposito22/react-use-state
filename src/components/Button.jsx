export default function Button({ currentLang, handleClick, isSelected }) {
  return (
    <button
      onClick={handleClick}
      className={isSelected ? "btn btn-warning" : "btn btn-primary"}
    >
      {currentLang.title}
    </button>
  );
}
