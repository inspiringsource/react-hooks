import React from 'react'
import "./styles.css"


export default function SpeedTypingGame() {

    const TIMER_DUR = 30;
    const [text, setText] = React.useState("")
    const [timer, setTimer] = React.useState(TIMER_DUR)
    const [start, setStart] = React.useState(false)
    const [wpm, setWpm] = React.useState(0)
    const inputRef = React.useRef(null)


    function handleChange(e){
        const {value} = e.target
        setText(value)
    }

    React.useEffect(() => {
        if(start && timer > 0){
            setTimeout(() => {
                setTimer(time=>time-1)
            }, 1000);
        } else if(timer === 0){
            handleEndGame()
        }
    }, [timer, start])

    function calculateWordCount(text){
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word.length > 0).length
    }
    function handleStart(){
        setStart(true)
        setTimer(TIMER_DUR)
        setWpm(0)
        setText("")
        inputRef.current.disabled=false
        inputRef.current.focus()

    }
    function handleEndGame(){
        setStart(false)
        setWpm(calculateWordCount(text))
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     const wordCount = calculateWordCount(text)
    //     setTimer(wordCount)
    // }

    return (
        <div>
            <h1>Speed Typing Game</h1>
            <textarea 
            ref={inputRef}
            onChange={handleChange}
            value={text}
            disabled={!start}
            />

            <h5>Press Start to activate text area</h5>
            <h4>Time remaining: {timer} </h4>
            <button 
            onClick={()=> handleStart()}
            disabled={start}>
                Start</button>
            <h1>Word count: {wpm} </h1>
        </div>
    )
}
