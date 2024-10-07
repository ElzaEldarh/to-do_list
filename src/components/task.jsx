export const Task = ({ value, isCompleted, date, tasks, setTasks, id }) => {
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <li className={`todo__item ${isCompleted ? "completed" : ""}`}>
      <span className="todo__task">
        <span>{value}</span>
        <span className="todo__date">{date}</span>
      </span>
      <span
        className="todo__action todo__action_complete"
        onClick={() => completeTask(id)}
      ></span>
      <span
        className="todo__action todo__action_delete"
        onClick={() => deleteTask(id)}
      ></span>
    </li>
  );
};
