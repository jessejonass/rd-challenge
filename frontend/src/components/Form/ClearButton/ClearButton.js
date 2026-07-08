const ClearButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default ClearButton;
