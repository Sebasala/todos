import CreateTodo from "@/components/CreateTodo/CreateTodo";
import Todos from "@/components/Todos/Todos";

/**
 * Home page component for the Todos app.
 * Displays the app title and renders the CreateTodo and Todos components.
 */
export default function Home() {
  return (
    <div>
      <h1>Todos App</h1>
      <CreateTodo />
      <Todos />
    </div>
  );
}
