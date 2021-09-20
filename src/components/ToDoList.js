import React from 'react';
import Task from "./Task";

export default function ToDoList({ task, toggleTask, deleteTask }) {
    return (
        <div
            className="mt-5 mb-3">
            {task.map(task => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                )
            })}
        </div>
    )
}
