import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, deleteTask, toggleTaskCompletion, editTask}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks added yet!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskList
