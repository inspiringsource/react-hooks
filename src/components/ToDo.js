//useRef
import React from 'react'

export default function ToDo() {
        const [newTodoValue, setNewTodoValue] = React.useState("")
        const [todosList, setTodosList] = React.useState([])
        
        function handleChange(event) {
            setNewTodoValue(event.target.value)
        }
        
        function addTodo(event) {
            event.preventDefault()
            setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
            setNewTodoValue("")
        }
        
        const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
        
        return (
            <div>
                <form>
                    <input type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                    <button onClick={addTodo}>Add todo item</button>
                </form>
                {allTodos}
            </div>
        )

}
