import React from "react";

function TaskList(props) {

  const display = props.map(element => {
    return (
      <span>{element}</span>
    )
  })
  return (
    <div className="tasks">
      {display}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
