function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 disabled:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
