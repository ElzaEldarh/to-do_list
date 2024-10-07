import { useEffect, useState, useRef } from "react";
import { Filter, Input, Task } from "./components";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  const [renderTasks, setRenderTasks] = useState(tasks);

  let counter = useRef(
    localStorage.getItem("counter")
      ? JSON.parse(localStorage.getItem("counter"))
      : 0
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("counter", counter.current);
    setRenderTasks(tasks);
  }, [tasks, counter]);

  return (
    <div className="todo">
      <Input
        tasks={tasks}
        setTasks={setTasks}
        counter={counter}
        
      />
      <Filter tasks={tasks} setRenderTasks={setRenderTasks} />
      <ul className="todo__items">
        {renderTasks.map(({ value, isCompleted, date, id }) => (
          <Task
            value={value}
            isCompleted={isCompleted}
            date={date}
            key={id}
            id={id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
