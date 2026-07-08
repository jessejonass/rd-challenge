function Checkbox({ children, id, ...props }) {
  return (
    <label className="flex items-center space-x-2" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className="form-checkbox h-5 w-5 text-blue-500"
        {...props}
      />
      <span>{children}</span>
    </label>
  );
}

export default Checkbox;
