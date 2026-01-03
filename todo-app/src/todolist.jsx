import { useState } from "react"

function Todolist() {
    let [todos, setTodos] = useState(["sample task"])
    let [newtodo, setNewTodo] = useState([""])

    function Addnewtask() {
        setTodos([...todos, newtodo])
    }

    function updateNewvalue(event) {
        setNewTodo(event.target.value);


    }
    return (
        <div>
            <input placeholder="add a task" value={newtodo} onChange={updateNewvalue} />
            <button onClick={Addnewtask}> Add task</button>

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