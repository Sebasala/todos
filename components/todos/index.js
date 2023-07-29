import Todo from '../todo'

export default function Todos({ todoList }) {
    return (
        <ul>
            {todoList.map((todo, index) => (
                <Todo isCompleted={todo.completed} description={todo.description} key={index} />
            ))}
        </ul>
    )
}
