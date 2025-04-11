function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 rounded-md px-4 py-2 w-full"
      {...props} // Spread operator to pass all props to the input element
    />
  );
}

export default Input;
