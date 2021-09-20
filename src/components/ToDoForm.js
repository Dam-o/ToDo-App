import React, { useState, useRef, useEffect } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const localStorage_key = "task.toDo"

export default function ToDoForm() {
    const [task, setTask] = useState([]);
    const taskNameRef = useRef();

    useEffect(() => {
        const savedTask = JSON.parse(localStorage.getItem(localStorage_key));
        if (savedTask) {
            setTask(savedTask)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorage_key,
            JSON.stringify(task))
    }, [task]);


    const taskHandler = (e) => {
        const name = taskNameRef.current.value;
        if (name === "") return
        setTask(prevTask => {
            return (
                [...prevTask,
                {
                    id: uuidv4(),
                    name: name,
                    complete: false
                }]
            )
        })
        taskNameRef.current.value = null;
    };

    const clearTask = () => {
        const completeTask = task.filter(task => !task.complete)
        setTask(completeTask)
    };

    const toggleTask = id => {
        const newTask = [...task];
        const taskToDo = newTask.find(taskToDo => taskToDo.id === id);
        taskToDo.complete = !taskToDo.complete;
        setTask(newTask);
    };

    const deleteTask = (id) => {
        const taskToDelete = [...task].filter(task => task.id !== id);
        setTask(taskToDelete);
    };

    const editTask = (id) => {

    }

    return (
        <>
            <Form>
                <Form.Group
                    className="form-group"
                    controlId="addTask">
                    <Form.Control
                        className="mt-5"
                        type="text"
                        placeholder="Add new task"
                        ref={taskNameRef}
                    />
                    <Button
                        className="button--add"
                        variant="outline"
                        onClick={taskHandler}
                    >Add task
                    </Button>
                    <Button
                        className="button--clear"
                        variant="outline"
                        onClick={clearTask}>Clear completed
                    </Button>
                </Form.Group>
            </Form >
            <ToDoList task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </>
    )
}
