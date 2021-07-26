import React, { useState, useEffect }  from 'react';
import robot from '../../assets/robot.jpg';
import './Home.css';
import NavBar from "../../components/Header/NavBar";
import HackirienCard from "../../components/Card/Hackirien/HackirienCard";
import AdvantageCard from "../../components/Card/Advantage/AdvantageCard";
import { Link } from 'react-router-dom';
import { projectApi, registrationApi } from '../../api';

function Home() {

    const projectAaron = {creatorName: 'Aaron', creatorAlias: '@Nswan mukin',
     description: "Controle d'un pont roulant avec les gestes de main, techologies: Deep learning pour la vision par ordinateur, arduino, PID, Filtre de Kalman",
     creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
     imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/73597814-80362400-4530-11ea-9345-488e8acbeddb_rqkv08tca.gif?updatedAt=1627303890647'}

     const projectKevin = {creatorName: 'Aaron', creatorAlias: '@Kevin mulaja',
      description: "Detection de plaque d'immatriculation, technologies: OpenCV, DeepLearning, YoloV4, Tesseract, Google colab",
      creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
      imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/0_bvJwx75_pszxcDlX_r2oudUQ8S.png?updatedAt=1627303908450'}

      const projectEli = {creatorName: 'Aaron', creatorAlias: '@Eli',
       description: "Conception d'un l'imnimetre et transmission automatique de l'information technologies: Arduino, capteur de niveau d'eau, Filtre bayesian, Python, C",
       creatorImageUrl: 'https://versions.bulma.io/0.7.1/images/placeholders/96x96.png',
       imageUrl: 'https://ik.imagekit.io/tlr7lkiwqbj/_rKubCYcAtM_pnr4HcJjG.jpg?updatedAt=1627304081390'}
    const [project, setProject] = useState(projectAaron);

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
                    <HackirienCard project={projectAaron}/>
                  </div>
                  <div className="column is-one-thirds">
                    <HackirienCard project={projectKevin}/>
                  </div>
                  <div className="column is-one-thirds">
                    <HackirienCard project={projectEli}/>
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
