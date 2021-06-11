import React, { useState, useEffect }  from 'react';
import robot from '../../assets/robot.jpg';
import './Home.css';
import NavBar from "../../components/Header/NavBar";
import HackirienCard from "../../components/Card/Hackirien/HackirienCard";
import AdvantageCard from "../../components/Card/Advantage/AdvantageCard";
import { Link } from 'react-router-dom';
import { projectApi, registrationApi } from '../../api';

function Home() {

    const projectDefault = {creatorName: 'Aaron', creatorAlias: '@Mukin',
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
     creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
     imageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/1280x960.png'}
    const [project, setProject] = useState(projectDefault);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      
    });

    return (
        <div className="App">
            <header>
                <NavBar />
            </header>

            <div className="First-section">
              <div className="columns">
                <div className="column is-8">
                  <h1 className="title is-1">
                    LES COMPETENCES D'AVENIR
                  </h1>
                  <h2 className="subtitle is-4 mt-5">
                     Savoir c'est bien, mais <strong>Savoir faire</strong> c'est mieux.<br/>
                     Pour avoir un <strong>Travail</strong> ou monter sa propre <strong>Startup</strong>, il faut plus qu'un diplome.<br/>
                     Avec <strong>Hackiri</strong> supprime la distance qui te sépare de ton emploi de reve
                     ou de ton projet en obtenant les <strong>Compétences</strong> necessaires.
                  </h2>
                  <div className="columns is-multiline  mt-5 px-6">
                    <div className="column is-4">
                      <AdvantageCard
                        color="yellow"
                        title="Apprentissage par projet"
                        content="Apprenez par la pratique avec des projets du monde réel et d'autres exercices pratiques qui mènent à une réelle maîtrise des compétences."/>
                    </div>
                    <div className="column is-4">
                      <AdvantageCard
                        color="blue"
                        title="Obtenez les compétences employables"
                        content="Notre programme de qualité est conçu avec des partenaires industriels, et non avec des universitaires, afin que vous appreniez les compétences recherchées par les meilleures entreprises."/>
                    </div>
                    <div className="column is-4">
                      <AdvantageCard
                        color="green"
                        title="L'aide que vous voulez, quand vous voulez"
                        content="Ayez des réponses rapide à vos questions 24/7, rejoignez notre reseau de freelance et ameliorez votre reseau professional avec un mentor qui vous suis chaque semaine."/>
                    </div>

                    <div class="column">
                      <Link to="/registration">
                        <button class="button is-black is-medium">
                          COMMENCER
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="column is 4">
                  <img src={robot} className="Image-first-section" alt="robot" />
                </div>
              </div>
            </div>

            <div className="Second-section">
              <div className="justify-content mb-6">
                <h2 className="title is-3 mt-6">
                  Projets par les Hackiriens
                </h2>

                <div className="columns mt-6 px-6">
                  <div className="column is-one-thirds">
                    <HackirienCard project={project}/>
                  </div>
                  <div className="column is-one-thirds">
                    <HackirienCard project={project}/>
                  </div>
                  <div className="column is-one-thirds">
                    <HackirienCard project={project}/>
                  </div>
                </div>

                <Link to="/projets">
                  <button class="button is-black is-medium">
                    Plus de projets par des Hackiriens
                  </button>
                </Link>
              </div>
            </div>
        </div>
    );
}

export default Home;
