import { useState, FormEvent } from "react";

type TodoFormProps = {
  addTodo: (value: string) => void;
};

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.length) {
      setFormErrors(["Please enter a todo."]);
      return;
    }

    if (value.length < 3) {
      setFormErrors(["Todo must be at least 3 characters."]);
      return;
    }

    if (value.trim() === "") {
      setFormErrors(["Please enter a valid todo."]);
      return;
    }
    addTodo(value);
    setFormErrors([]);
    setValue("");
  };

  const errorClass = formErrors.length ? "border-red-500" : "border-gray-300";
  const inputClass = `border rounded p-2 ${errorClass}`;
  const errorText = formErrors.length ? (
    <div className="text-red-500 text-xs">
      {formErrors.map((error, index) => (
        <div key={index}>{error}</div>
      ))}
    </div>
  ) : null;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Add Todo
      </button>
      {errorText}
    </form>
  );
};
export default TodoForm;
