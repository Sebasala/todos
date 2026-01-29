import TodoItem from "@/components/TodoItem/TodoItem";
import type { Todo } from "@/generated/prisma/client";
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
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p>No todos found</p>
      )}
    </>
  );
}
