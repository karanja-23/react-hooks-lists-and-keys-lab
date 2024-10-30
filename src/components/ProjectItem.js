import React from "react";

function Rendertech({ technologies }){
  return technologies.map( tech => (
    <span key={tech}>{tech}</span>
  ))
}

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <Rendertech technologies={technologies}/>
      </div>
    </div>
  );
}

export default ProjectItem;
