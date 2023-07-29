"use client"
import { useState } from 'react'
import Link from 'next/link'
import todo from './todo.module.css'

export default function Todo({ id, isCompleted, title }) {
    const [ isCompletedState, setIsCompletedState ] = useState(isCompleted)
    
    return (
        <li className={todo.listItem}>
            <input
                type="checkbox" 
                checked={isCompletedState}
                onChange={() => setIsCompletedState(!isCompletedState)} 
            />
            <span>
                <Link href={`/todos/${id}`}>{title}</Link>
            </span>
        </li>
    )
}