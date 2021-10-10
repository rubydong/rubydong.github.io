import { ReactElement } from 'react';

import projects from '../utils/projects.json';

const ProjectsPage = (): ReactElement => {
  const projectsContent = projects.map((project, i) => {
    const color = { backgroundColor: project.color };
    return (
      <div key={project.title} className={`project ${i % 2 === 0 ? '' : 'v2'}`}>
        <div className="proj-background" style={color}></div>
        <div className="proj-img">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="proj-desc">
          <h2>
            {`${i + 1}`.padStart(2, '0')}. {project.title}
          </h2>
          <div className="text">{project.text}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="landing">
      <div id="projects">
        <h1> Featured Projects </h1>
        <hr />
        {projectsContent}
      </div>
    </div>
  );
};

export default ProjectsPage;
