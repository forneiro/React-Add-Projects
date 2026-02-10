import Button from "./Button";

export default function Aside({ onSelect, onProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={() => onSelect("form")}>+ Add Project</Button>
      </div>
      <div>
        {projects.map((project) => {
          return (
            <button
              key={project.title}
              onClick={() => onProject(project.id)}
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
