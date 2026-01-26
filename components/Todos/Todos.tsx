import { Todo } from "@/generated/prisma/browser";
import { getTodos } from "@/lib/actions";

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
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>No todos found</p>
      )}
    </>
  );
}
