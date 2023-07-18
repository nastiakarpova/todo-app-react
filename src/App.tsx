// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo App</h1>
      {/* <label htmlFor="task-input">Here</label> */}
      <div className='task-div'>
        <input 
          type="text" 
          className="task-input" 
          placeholder='Write your task'
        />
        <button 
          className='add-btn'>
            +
        </button>
      </div>
    </>
    
  )
}

export default App;