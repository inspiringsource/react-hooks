import {useState} from 'react'


export default function useCustomHook() {
    const [count, setCount] = useState(0)

    function increment(){
       setCount(prevCount => prevCount + 1)
    }
    return ({count, increment})
}
