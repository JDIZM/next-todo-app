import { useState, FormEvent } from "react";

type TodoFormProps = {
  addTodo: (value: string) => void;
};

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.length) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-gray-300 rounded p-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Add Todo
      </button>
    </form>
  );
};
export default TodoForm;
