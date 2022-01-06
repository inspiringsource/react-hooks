//useState Part 1 - Creating State
import React, {useState} from 'react'

export default function UseState() {
    const [answer] = useState("Yes")
    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
        </div>
    )
}
