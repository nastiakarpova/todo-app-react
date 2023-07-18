// import { useState } from 'react'
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo App</h1>
      {/* <label htmlFor="task-input">Here</label> */}
      <input type="text" className="task-input" placeholder='I have to...'/>
      <button className='add-btn'>+</button>
    </>
    
  )
}