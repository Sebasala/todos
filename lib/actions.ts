"use server";

import type { Todo } from "@/generated/prisma/client";
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

/**
 * Toggles the completed status of a todo item.
 * @param id - The ID of the todo item to toggle.
 * @throws Throws an error if the toggle operation fails.
 */
export async function toggleComplete(id: number) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    await prisma.todo.update({
      where: { id },
      data: { completed: !todo.completed },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error toggling completed todo status", error);
    throw new Error(
      `Failed to toggle completed status: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Deletes a todo by its ID.
 * @param id - The unique identifier of the todo to delete
 * @throws Error if the todo is not found or deletion fails
 */
export async function deleteTodo(id: number) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    await prisma.todo.delete({ where: { id } });
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting todo", error);
    throw new Error(
      `Failed to delete todo: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}
