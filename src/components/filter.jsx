import { useEffect, useState } from "react";

export const Filter = ({ tasks, setRenderTasks }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [completedFilter, setCompletedFilter] = useState("completed");


  useEffect(() => {
    if (activeFilter === "active") {
      setRenderTasks(tasks.filter(({ isCompleted }) => !isCompleted));
    } else if (activeFilter === "completed") {
      setRenderTasks(tasks.filter(({ isCompleted }) => isCompleted));
    } else {
      setRenderTasks(tasks); 
    }
  }, [activeFilter, tasks]);
  return (
    <select
      className="todo__options"
      onChange={(e) => setActiveFilter(e.target.value)}
      value={activeFilter}  
    >
      <option value="all">все</option>
      <option value="active">активные</option>
      <option value="completed"
      onChange={(e) => setCompletedFilter(e.target.value)}
      >завершённые
      </option>
    </select>
  );
};
