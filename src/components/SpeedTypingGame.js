import React from 'react'
import "./styles.css"


export default function SpeedTypingGame() {

    const [text, setText] = React.useState("")

    function handleChange(e){
        const {value} = e.target
        setText(value)
    }
    return (
        <div>
            <h1>Speed Typing Game</h1>
            <textarea  
            onChange={handleChange}
            value={text}
            />
            <h4>Time remaining: ???</h4>
            <button>Start</button>
            <h1>Word count: {text.length} </h1>
        </div>
    )
}
