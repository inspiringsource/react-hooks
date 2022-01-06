//useEffect Part 1
import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

export default function UseEffect() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count]) //change color every (re-)render of count
    
    // useEffect(() => {
    //     setColor(randomcolor())
    // }, []) // runs only once | [] equivalent to [setColor]

    return (
        <div>
            <h1 style={{color:color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
