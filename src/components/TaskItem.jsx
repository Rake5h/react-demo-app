import { useState } from "react";

function TaskItem({ task, tasks, setTasks }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  function toggleComplete() {
    setTasks(tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  }

  function saveEdit() {
    setTasks(tasks.map(t =>
      t.id === task.id ? { ...t, text } : t
    ));
    setEditing(false);
  }

  function deleteTask() {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  return (
    <li className={`task ${task.completed ? "done" : ""}`}>
      {editing ? (
        <input autoFocus value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <span onClick={toggleComplete}>{task.text}</span>
      )}

      <div>
        {editing ? (
          <button onClick={saveEdit}>💾</button>
        ) : (
          <button onClick={() => setEditing(true)}>✏️</button>
        )}
        <button onClick={deleteTask}>❌</button>
      </div>
    </li>
  );
}

export default TaskItem;
