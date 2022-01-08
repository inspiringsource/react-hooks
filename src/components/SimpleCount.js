import React from 'react'
import useCustomHook from './useCustomHook'

export default function SimpleCount() {
    const {count, increment} = useCustomHook()
    
    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={increment}>Add 1</button>
        </div>
    )
}
