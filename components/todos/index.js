import Todo from '../todo'

export default function Todos({ todoList }) {
    return (
        <ul>
            {todoList.map((todo, index) => {
                const { completed, title, id } = todo
                return (
                    <Todo 
                        isCompleted={completed} 
                        title={title} 
                        key={`${id}-${index}`} 
                        id={id} 
                    />
                )
            })}
        </ul>
    )
}
