import Todos from '../components/todos'
import Main from '../components/main'
import { getTodosData } from '../lib/todos'

export default async function Home() {
  const todosList = await getTodosData();
  return (
    <Main>
      <h1>Todos</h1>
      <Todos todoList={todosList} />
    </Main>
  )
}
