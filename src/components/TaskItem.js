import React, {useState} from 'react'

const TaskItem = ({task, deleteTask, toggleTaskCompletion, editTask}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(task.title)
  const [newDate, setNewDate] = useState(task.date) // New date state
  const [newDescription, setNewDescription] = useState(task.description) // New description state

  const handleEdit = () => {
    if (isEditing) {
      // Edit task with the new title, date, and description
      editTask(task.id, newTitle, newDate, newDescription)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="d-flex justify-content-between align-items-center my-2 p-2 border">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="form-control mx-2"
            placeholder="Title"
          />
        ) : (
          <span
            className={`mx-2 ${
              task.completed ? 'text-decoration-line-through' : ''
            }`}
          >
            {task.title}
          </span>
        )}
      </div>

      {/* Date field */}
      <div className="d-flex align-items-center">
        {isEditing ? (
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="form-control mx-2"
          />
        ) : (
          <span className="mx-2">{task.date}</span>
        )}
      </div>

      {/* Description field */}
      <div className="d-flex align-items-center">
        {isEditing ? (
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="form-control mx-2"
            rows="2"
            placeholder="Description"
          />
        ) : (
          <span className="mx-2">{task.description}</span>
        )}
      </div>

      <div>
        <button className="btn btn-warning btn-sm mx-1" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
