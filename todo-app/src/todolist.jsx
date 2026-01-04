import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todolist() {
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4() }
    ]);
    let [newtodo, setNewTodo] = useState("");

    function Addnewtask() {
        setTodos((prevTodos) => {
            return [...prevTodos , {task:newtodo ,id: uuidv4() }]

        });
        setNewTodo("");
    }

    function updateNewvalue(event) {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input
                placeholder="add a task"
                value={newtodo}
                onChange={updateNewvalue}
            />
            <button onClick={Addnewtask}>Add task</button>

            <hr />
            <h4>To do list</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
