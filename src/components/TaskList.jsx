import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TaskList;
