import React from 'react';
import { Card } from 'react-bootstrap';
import clsx from 'clsx';




export default function Task({ task, toggleTask, deleteTask }) {


    const closeTask = () => {
        deleteTask(task.id)
    };

    const toggle = () => {
        toggleTask(task.id)
    };

    return (

        <Card
            className={clsx({
                'mt-2 p-2 task task_complete': task.complete,
                'mt-2 p-2 task task_incomplete': !task.complete
            })
            }>
            <p> {task.name}</p>
            <div className="icons">
                <i className="far fa-check-circle"
                    title="Done"
                    onClick={toggle}></i>
                <i className="far fa-times-circle"
                    title="Abandon"
                    onClick={closeTask}></i>
            </div>
        </ Card >

    )
}
