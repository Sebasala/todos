"use client";

import { Todo } from "@/generated/prisma/client";
import { toggleComplete } from "@/lib/actions";
import { useTransition } from "react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();
  const handleCompleteUpdate = () =>
    startTransition(() => toggleComplete(todo.id));
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        disabled={isPending}
        onChange={handleCompleteUpdate}
      />
      {todo.title}
    </li>
  );
}
