import Aside from "./components/Aside";
import Home from "./components/Home";
import Form from "./components/Form";
import Project from "./components/Project";

import { useState } from "react";

function App() {
  const [showSection, setShowSection] = useState("home");
  const [projects, setProjects] = useState([]);
  const [projectSelected, setProjectSelected] = useState(undefined);

  console.log("hola");
  // Change Section
  function handleChangeSection(identifier) {
    setShowSection(identifier);
  }

  // Select project
  function handleSelectProject(projectId) {
    setShowSection("project");
    const project = projects.find((project) => project.id == projectId);
    setProjectSelected(project);
  }

  // Add new project to aside
  function handleCreateProject(project) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects, project];

      return updatedProjects;
    });
  }

  function handleDeleteProject(projectId) {
    setProjects((prevProjects) => {
      const deleteProject = prevProjects.indexOf(projectId);
      const updatedProjects = prevProjects.slice(deleteProject, 1);

      return updatedProjects;
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Aside
          projects={projects}
          onSelect={handleChangeSection}
          onProject={handleSelectProject}
        />
        <div className="w-[35rem] mt-16">
          {showSection === "home" && <Home onSelect={handleChangeSection} />}
          {showSection === "form" && (
            <Form
              onSelect={handleChangeSection}
              onCreate={handleCreateProject}
            />
          )}
          {showSection === "project" && (
            <Project
              projects={projects}
              // onSelect={handleSelectProject}
              project={projectSelected}
              onDelete={handleDeleteProject}
            />
          )}
        </div>
      </main>

      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
    </>
  );
}

export default App;
