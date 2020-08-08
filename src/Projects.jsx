import React, { Component } from 'react';
import projects from './projects.json';

export class Projects extends Component {
	render() {
        let projectsContent = [];
        projects.forEach((project, i) => {
            let color = {'backgroundColor': project.color};
            projectsContent.push(
                <div key={project.title} className={i % 2 === 0 ? "project" : "project v2"}>
                    <div className="proj-background" style={color}></div>
                    <div className="proj-img"><img src={project.img} alt={project.title}/></div>
                    <div className="proj-desc">
                        <h2> 0{i+1}. {project.title} </h2>
                        <div className="text"> {project.text} </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            );
        });

    	return (
			<div className="landing">
		        <div id="projects">
                    <h1> Featured Projects </h1> 
                    <hr/>
                    {projectsContent}
		        </div>
		</div>
    	);
  	}
}
