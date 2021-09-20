import React from 'react';
import ToDoForm from './components/ToDoForm';

export default function App() {
  return (
    <div
      className="container">
      <h1
        style={{ fontSize: "75px" }}>ToDo List </h1>
      <ToDoForm />
    </div >
  )
}
