import React from "react";
import ProjectItem from "./ProjectItem";

function Item ({ projects }){
  projects.map(project =>{
    <ProjectItem  name={project.name} about={project.about}/>
  })
}
function ProjectList({ projects }) {
  console.log(projects);
  const item = projects.map(project => {
    console.log(project.name)
    return (
      <ProjectItem key={project.name}name={project.name} about={project.about} technologies={project.technologies}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {item}
      </div> 
    </div>
  );
}

export default ProjectList;
