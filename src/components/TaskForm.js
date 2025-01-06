import React, {useState} from 'react'

const TaskForm = ({addTask}) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [descr, setDescri] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      addTask({title, description: descr, date})
      setTitle('')
      setDate('')
      setDescri('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task"
        />
        <input
          type="text"
          className="form-control"
          value={descr}
          onChange={(e) => setDescri(e.target.value)}
          placeholder="Description"
        />
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Select date"
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </div>
    </form>
  )
}

export default TaskForm
