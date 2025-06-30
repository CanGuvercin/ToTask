import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";


function App() {
  const [projectState, setProjectStateUpdated] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectStateUpdated(prevState => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectState.selectedProject === null) {
    content = <NewProject />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
