import React, { useState } from "react";
import { ITask } from "../../../interfaces/ITask";

interface Props {
  tasks: ITask[];
  setTasks: any;
}

const TaskForm = ({ tasks, setTasks }: Props) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const listTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(listTasks);
  };

  return (
    <div className="card">
      <div className="card-boy">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            placeholder="Ingrese la tarea"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          ></input>

          <div className="d-grid gap-2 mt-2">
            <button className="btn btn-success" type="button">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
