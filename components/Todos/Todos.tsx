import TodoItem from "@/components/TodoItem/TodoItem";
import type { Todo } from "@/generated/prisma/client";
import { getTodos } from "@/lib/actions";

/**
 * Component for displaying a list of todos.
 * Fetches todos from the server and renders them as a list.
 * Displays an error message if fetching fails, or a message if no todos exist.
 *
 * @returns The rendered todos list component
 */
export default async function Todos() {
  let todos: Todo[];
  try {
    todos = await getTodos();
  } catch {
    return <p>Failed to load todos. Please try again later.</p>;
  }

  return (
    <>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p>No todos found</p>
      )}
    </>
  );
}
