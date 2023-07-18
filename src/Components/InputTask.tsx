import React from "react"

function InputTask () {
    return (
        <div>
            <h1>Todo App</h1>

            <div className='task-div'>
                <input 
                type="text" 
                className="task-input" 
                placeholder='Write your task'
                />

                <button 
                type='submit'
                className='add-btn'>
                +
                </button>
            </div>

        </div>
    )
}

export default InputTask;