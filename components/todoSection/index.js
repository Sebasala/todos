'use client'
import todoPageStyles from './todoPage.module.css'
import { useState } from 'react'

export default function TodoSection({ isCompleted, title, description }) {
    const [ isCompletedState, setIsCompletedState ] = useState(isCompleted)

    return (
        <section className={todoPageStyles.section}>
            <h1>
                <input 
                    type="checkbox" 
                    checked={isCompletedState}
                    onChange={() => setIsCompletedState(!isCompletedState)} 
                />
                <span>{title}</span>
            </h1>
            <p>{description}</p>
        </section>
    )
}
