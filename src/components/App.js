import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState('All')

  function onDelete(text) {
    setTask(tasks.filter(item => item.text !== text))
  }
  function onTaskFormSubmit(dataObj) {
    setTask([...tasks, dataObj])

  }
  function onSelectCategory(e) {
    setCategory(e)

  }
  const filteredTasks = tasks.filter((task) => {
    if (category === 'All') {
      return true
    }
    return task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={category} onSelectCategory={onSelectCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES.filter((cat) => cat !== "All")} />
      <TaskList tasks={filteredTasks} onDelete={onDelete} />
    </div>
  );
}

export default App;