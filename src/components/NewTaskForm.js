import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("")

  function getInput(event) {
    setText(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category })
    setCategory("Code")
    setText("")
  }

  return (

    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={getInput} value={text} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;