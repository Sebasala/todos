import main from './main.module.css'

export default function Main({ children }) {
    return (
        <main className={main.container}>{ children }</main>
    )
}