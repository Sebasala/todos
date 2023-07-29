import Link from "next/link"
import Main from "../../../components/main"
import { getTodosData } from "@/lib/todos"
import TodoSection from "@/components/todoSection"

export async function generateMetadata({ params }) {
    const todo = await getTodo(params)
    const { title, description } = todo
    return {
        title,
        description
    }
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const todos = await getTodosData()

    return todos.map(todo => ({
        id: todo.id,
    }))
}

async function getTodo ({ id }) {
    const todos = await getTodosData()
    return todos.find(todo => todo.id === id)
}

export default async function TodoPage({ params }) {
    const todo = await getTodo(params)
    const { title, description, completed } = todo
    return (
        <Main>
            <TodoSection 
                isCompleted={completed} 
                title={title} 
                description={description} 
            />
            <Link href="/">All todos</Link>
        </Main>
    )
}