import Link from "next/link"
import Main from "../../../components/main"

export const metadata = {
    title: 'First Todo'
}

export default function FirstTodo() {
    return (
        <Main>
            <h1>First Todo</h1>
            <Link href="/">All todos</Link>
        </Main>
    )
}