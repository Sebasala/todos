import { createTodo } from "@/lib/actions";
import styles from "./styles.module.css";

/**
 * Component for creating a new todo item.
 * Renders a form with an input for the todo title and a submit button.
 */
export default function CreateTodo() {
  return (
    <form className={styles.form} action={createTodo}>
      <input
        className={styles.title}
        name="title"
        type="text"
        placeholder="New todo"
      />
      <button type="submit">Create</button>
    </form>
  );
}
