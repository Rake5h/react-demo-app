import { useState } from "react";

function TaskInput({ tasks, onAddTask }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;

    onAddTask([...tasks, { id: Date.now(), text, completed: false }]);
    setText("");
  }

  return (
    <div className="task-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
