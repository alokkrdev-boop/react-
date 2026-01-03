import { useState } from "react"

function Todolist() {
    let [todos, setTodos] = useState(["sample task"])
    return (
        <div>
            <input placeholder="add a task" />
            <button> Add task</button>

            <br /><br /><br />
            <hr />
            <h4>To do list</h4>
            <ul>
                {
                    todos.map((todos) => {
                       return <li>{todos}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todolist