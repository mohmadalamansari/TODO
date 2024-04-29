import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4(), isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodo) => {
            return ([...prevTodo, { task: newTodo, id: uuidv4() , isDone:false }])
            // console.log("we added task")
        });
        setNewTodo("")
    }

    let updateTodoValue = (event) => {
        event.preventDefault();
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
        )
    }
    let markAllAsdone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone:true,
                }
            })
        )
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                } else {
                    return todo;
                }
            })
        )
    }

    let markAsdone =(id) =>{
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone:true,
                    }
                } else {
                    return todo;
                }
            })
        )
    }


    return (
        <>
            <input placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}>
            </input>
            <br />
            <button onClick={addNewTask} >Add Task</button>
            <br />

            <hr></hr>
            <h4>Task todo</h4>
            <ol>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span  style={todo.isDone ? {textDecorationLine :"line-through"} :{}}> {todo.task} </span>
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>toUpperCase</button>
                            <button onClick={() => markAsdone(todo.id)}>markAsdone</button>

                        </li>
                    ))
                }
            </ol>
            <button onClick={upperCaseAll}>Upepr case All</button>
            <button onClick={markAllAsdone}>markALLAsdone</button>


        </>
    )
}
export default TodoList;