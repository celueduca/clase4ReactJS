import React from "react";
import { ITask } from "../../../interfaces/ITask";

interface Props {
  tasks: ITask[];
  task: ITask;
  setTasks: any;
  index: number
}

const ItemList = ({ tasks, task, setTasks, index }: Props) => {
  
  const toogleDoneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const deleteTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  return (
    <div className="card card-body mt-2">
      <h2
        style={{
          textDecoration: task.done ? "line-through" : "",
        }}
      >
        {task.name}
      </h2>
      <p>{"Estado: " + task.done}</p>
      <div>
        <button className="btn btn-info" onClick={() => toogleDoneTask(index)}>
          {task.done ? "Cancelar" : "Terminar"}
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(index)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemList;
