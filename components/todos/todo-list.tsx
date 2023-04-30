import { Todo } from "../../interfaces/todos";
import DoneIcon from "@/components/icons/DoneIcon";
import DeleteIcon from "@/components/icons/DeleteIcon";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo, completeTodo }: TodoListProps) => (
  <ul className="p-2">
    {todos.map((todo) => (
      <li key={todo.id} className="p-4 mb-4 bg-white rounded text-black">
        <div className="flex justify-between items-center">
          <p>
            {todo.id} - {todo.title}
          </p>
          <div>
            <button
              className="bg-white hover:bg-white font-bold py-2 px-2 rounded"
              onClick={() => completeTodo(todo.id)}
            >
              <DoneIcon size="small" style={{ color: "green" }} />
            </button>
            <button
              className="bg-white hover:bg-white font-bold py-2 px-2 rounded ml-2"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteIcon size="small" style={{ color: "red" }} />
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
export default TodoList;
