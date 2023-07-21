import React from "react"
import Todo from "./Todo.js"
import data from "../data.js"

function InputTask (props) {

    // const [task, setTask] = React.useState([data.description:string])
    const [text, setText] = React.useState("")

    function addTask() {
    
        props.setTasks(prevTasks => {
            return ([...prevTasks, 
                {
                    id: prevTasks.length+1,
                    description: text,
                    done: false,
                }    
        ])
        })
    }

    function storeText(e) {
        setText(e.target.value)
        console.log(text)
    }

    return (
        <div>
            <h1>Todo App</h1>

            <div className='task-div'>
                <input 
                type="text" 
                className="task-input" 
                placeholder='Write your task'
                onChange={storeText}
                />

                <button 
                onClick={addTask}
                type='submit'
                className='add-btn'>
                +
                </button>
            </div>

        </div>
    )
}

export default InputTask;