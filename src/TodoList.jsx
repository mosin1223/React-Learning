 import {v4 as uuidv4} from "uuid";
 import { useState } from "react";  
 function TodoList(){
    const [tasks, setTasks] = useState([{task:"sample task", id : uuidv4()}]);
    let [newTask, setNewTask] = useState("");

    let  addnewtask = () => {
        console.log("Adding new task: ", newTask , " to the list" , tasks);
        setTasks((prevTasks) => {
            return [...prevTasks , {task : newTask , id : uuidv4()}]
        });
        setNewTask("");
    }

    let handleInputChange = (event) =>{
        console.log(event.target.value);
        setNewTask(event.target.value); 
    }

    let deleteTask = (id)=>{
        setTasks((prevTask)=>tasks.filter((prevTask) => prevTask.id != id));
    
    }
    return(
        <div>
            <input placeholder="Add a task" value={newTask} onChange={handleInputChange} />
            <button onClick={addnewtask}>Add</button>
            <br /><br /><br />
            <hr />
            <h1>Things To Do</h1>  
            <ul>
                {
                 tasks.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default TodoList;