import React, {useState} from 'react'
import ReactDOM from "react-dom/client";
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
//import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), ...task, completed: false}])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    )
  }

  const editTask = (id, title, date, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, title, date, description} : task,
      ),
    )
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />
    </div>
  )
}

export default App

//ReactDOM.render(<App />, document.getElementById('root'))
