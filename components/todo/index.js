"use client"
import { useState } from 'react'
import Link from 'next/link'
import todo from './todo.module.css'

export default function Todo({ isCompleted, description }) {
    const [ isCompletedState, setIsCompletedState ] = useState(isCompleted)
    
    return (
        <div>
            <input 
                className={todo.checkbox} 
                type="checkbox" 
                checked={isCompletedState}
                onChange={() => setIsCompletedState(!isCompletedState)} 
            />
            <span>
                <Link href="/todos/first-todo">{description}</Link>
            </span>
        </div>
    )
}