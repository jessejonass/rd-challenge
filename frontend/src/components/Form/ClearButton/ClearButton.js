function ClearButton({ text, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      aria-label={text}
    >
      {text}
    </button>
  );
}

export default ClearButton;
