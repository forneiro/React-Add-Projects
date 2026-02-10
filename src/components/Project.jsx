import { useRef, useState } from "react";

export default function Project({ projects, project, onDelete }) {
  const [userTasks, setUserTasks] = useState(false);

  const task = useRef();

  function handleUserTasks() {
    project.tasks.push(task.current.value);
    setUserTasks((prevValue) => !prevValue);
    task.current.value = "";
  }

  function handleDeleteTask(task) {
    const taskToDelete = project.tasks.indexOf(task);
    project.tasks.splice(taskToDelete, 1);
    setUserTasks((prevValue) => !prevValue);
  }

  return (
    <>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={() => onDelete(project)}
            className="text-stone-700 hover:text-red-500"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="flex items-center gap-4">
        <input
          ref={task}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleUserTasks}
          className="text-stone-600 hover:text-stone-950"
        >
          Add Task
        </button>
      </p>

      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {project.tasks.map((task) => {
          return (
            <li className="flex justify-between my-4">
              <p>{task}</p>
              <button
                onClick={() => handleDeleteTask(task)}
                className="text-stone-700 hover:text-red-500"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
