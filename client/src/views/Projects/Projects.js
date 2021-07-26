import React from 'react';
import robot from '../../assets/robot.jpg';
import './Projects.css';
import NavBar from "../../components/Header/NavBar";
import HackirienCard from "../../components/Card/Hackirien/HackirienCard";

function Projects() {

    const projects = [{creatorName: 'Aaron', creatorAlias: '@Theo',
                        description: "Gestion efficace de l'energie dans un batiment: Arduino, schema electrique, photo-electric sensor, relai, capteur de presence",
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/motion-detector_MP6pjrZnE.jpg?updatedAt=1627304764939'},
                       {creatorName: 'Aaron', creatorAlias: '@Nswan mukin',
                        description: "Controle d'un pont roulant avec les gestes de main, techologies: Deep learning pour la vision par ordinateur, arduino, PID, Filtre de Kalman",
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/73597814-80362400-4530-11ea-9345-488e8acbeddb_rqkv08tca.gif?updatedAt=1627303890647'},
                       {creatorName: 'Aaron', creatorAlias: '@Kevin mulaja',
                        description: "Detection de plaque d'immatriculation, technologies: OpenCV, DeepLearning, YoloV4, Tesseract, Google colab",
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/0_bvJwx75_pszxcDlX_r2oudUQ8S.png?updatedAt=1627303908450'},
                       {creatorName: 'Aaron', creatorAlias: '@Eli',
                        description: "Conception d'un l'imnimetre et transmission automatique de l'information technologies: Arduino, capteur de niveau d'eau, Filtre bayesian, Python, C",
                        creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
                        imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/_rKubCYcAtM_pnr4HcJjG.jpg?updatedAt=1627304081390'}]
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
