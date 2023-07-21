// import { useState } from 'react'
import './App.css'
import data from "./data.js"
import Todo from "./Components/Todo.js"
import InputTask from "./Components/InputTask.js"
import React from "react"
import {useState} from "react"

function App() {

  const [tasks, setTasks] = useState(data)
  console.log(tasks)

  const todos = tasks.map(task => {
    return (
      <Todo
        key={task.id}
        item={task}
      />
    )
  })

  return (
    <>
      <InputTask 
        setTasks={setTasks}
      />
      {todos}
    </> 
  )
}

export default App;