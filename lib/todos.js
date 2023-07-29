export async function getTodosData() {
  const todosObject = await import('../json/data.json');
  const { todos } = todosObject;
  return todos;
}