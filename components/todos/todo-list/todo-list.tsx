import { Todo } from "@/interfaces/todos";
import DoneIcon from "@/components/icons/done-icon";
import DeleteIcon from "@/components/icons/delete-icon";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo, completeTodo }: TodoListProps) => (
  <ul className="p-2">
    {todos.map(({ id, title, completed }) => (
      <li key={id} className="p-4 mb-4 bg-white rounded text-black">
        <div className="flex justify-between items-center">
          <p>
            {id} - {title}
          </p>
          <div>
            <button
              className="bg-white hover:bg-white font-bold py-2 px-2 rounded"
              onClick={() => completeTodo(id)}
            >
              <DoneIcon
                size="small"
                style={{ color: completed ? "green" : "grey" }}
              />
            </button>
            <button
              className="bg-white hover:bg-white font-bold py-2 px-2 rounded ml-2"
              onClick={() => deleteTodo(id)}
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
