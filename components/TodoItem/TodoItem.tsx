"use client";

import { Todo } from "@/generated/prisma/client";
import { deleteTodo, toggleComplete } from "@/lib/actions";
import { useTransition } from "react";
import styles from "./styles.module.css";

/**
 * Props for the TodoItem component.
 */
interface TodoItemProps {
  /** The todo item to display */
  todo: Todo;
}

/**
 * Component for displaying a single todo item.
 * Renders a checkbox to toggle completion status and a delete button.
 *
 * @param props - The component props
 * @returns The rendered todo item component
 */
export default function TodoItem({ todo }: TodoItemProps) {
  const [isPending, startTransition] = useTransition();
  const handleCompleteUpdate = () =>
    startTransition(() => toggleComplete(todo.id));
  const handleDelete = () => startTransition(() => deleteTodo(todo.id));
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        disabled={isPending}
        onChange={handleCompleteUpdate}
        title="Complete todo"
      />
      {todo.title}
      <button
        className={styles.delete}
        aria-label="Delete todo"
        title="Delete todo"
        onClick={handleDelete}
      >
        ×
      </button>
    </li>
  );
}
