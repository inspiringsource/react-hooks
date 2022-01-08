//useRef
import React from 'react'

export default function ToDo() {
        const [newTodoValue, setNewTodoValue] = React.useState("")
        const [todosList, setTodosList] = React.useState([])
        const inputRef = React.useRef(null)
        
        function handleChange(event) {
            setNewTodoValue(event.target.value)
        }
        
        function addTodo(event) {
            event.preventDefault()
            setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
            setNewTodoValue("")
            inputRef.current.focus()
        }
        
        const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
        
        return (
            <div>
                <form>
                    <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                    <button onClick={addTodo}>Add todo item</button>
                </form>
                {allTodos}
            </div>
        )

}
