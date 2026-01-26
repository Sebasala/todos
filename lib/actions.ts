"use server";

import { Todo } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getTodos(
  page: number = 1,
  pageSize: number = 10,
): Promise<Todo[]> {
  try {
    const todos = await prisma.todo.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });
    return todos;
  } catch (error) {
    console.error("getTodos catch error log", error);
    throw new Error("getTodos catch throw error");
  }
}
