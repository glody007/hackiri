import React from 'react';
import robot from '../../assets/robot.jpg';
import './Projects.css';
import NavBar from "../../components/Header/NavBar";
import HackirienCard from "../../components/Card/Hackirien/HackirienCard";

function Projects() {

    const projects = [{creatorName: 'Aaron', creatorAlias: '@Mukin',
                       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
                       creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                       imageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png'},
                       {creatorName: 'Aaron', creatorAlias: '@Mukin',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png'},
                       {creatorName: 'Aaron', creatorAlias: '@Mukin',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png'},
                       {creatorName: 'Aaron', creatorAlias: '@Mukin',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png'}]
    const listProjects = projects.map((project, index) =>
      <div key={index.toString()} className="column is-3">
          <HackirienCard project={project}/>
      </div>
    );
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <div className="Section">
              <div className="container">
                <div className="column is-8 is-offset-2">
                  <h2 className="subtitle is-2">
                     Quelques projets réalisé avec l'aide de hackiri par des hackiriens.
                  </h2>
                </div>
                <div className="columns is-multiline my-6">
                  {listProjects}
                </div>
              </div>
            </div>
        </div>
    );
}

export default Projects;
