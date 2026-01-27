"use server";

import { Todo } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { validateSmallText } from "@/lib/validation";
import { revalidatePath } from "next/cache";

/**
 * Retrieves a paginated list of todos.
 * @param {number} [page=1] - The page number to retrieve (1-based).
 * @param {number} [pageSize=10] - The number of todos per page.
 * @returns {Promise<Todo[]>} A promise that resolves to an array of Todo objects, ordered by creation date descending.
 */
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

/**
 * Creates a new todo item from form data.
 * @param formData - The form data containing the todo title.
 * @throws If the title is invalid or creation fails.
 */
export async function createTodo(formData: FormData) {
  try {
    const titleEntry = formData.get("title");
    const title = validateSmallText(titleEntry);
    if (title) {
      await prisma.todo.create({ data: { title } });
      revalidatePath("/");
    }
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error(
      `Failed to create todo: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}
