// import { useState } from 'react'
import './App.css'
import data from "./data.js"
import Todo from "./Components/Todo.js"
import InputTask from "./Components/InputTask.js"
import React from "react"

function App() {
  // const [count, setCount] = useState(0)
  const tasks = data.map(task => {
    return (
      <Todo
        key={task.id}
        item={task}
      />
    )
  })

  return (
    <>
      <InputTask />
      {tasks}
    </> 
  )
}

export default App;