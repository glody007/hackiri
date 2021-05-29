import React from 'react';
import robot from '../../assets/robot.jpg';
import './Home.css';
import NavBar from "../../components/Header/NavBar";
import HackirienCard from "../../components/Card/Hackirien/HackirienCard";
import AdvantageCard from "../../components/Card/Advantage/AdvantageCard";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            
            <div className="First-section">
              <div className="columns">
                <div className="column is-two-thirds">
                  <h1 className="title is-1">
                    Lorem ipsum dolor
                  </h1>
                  <h2 className="subtitle is-2">
                     sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua.
                  </h2>
                  <div className="columns mt-6 px-6">
                    <div className="column">
                      <AdvantageCard />
                    </div>
                    <div className="column">
                      <AdvantageCard />
                    </div>
                    <div className="column">
                      <AdvantageCard />
                    </div>
                  </div>
                </div>
                <div className="column">
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
                    <HackirienCard />
                  </div>
                  <div className="column is-one-thirds">
                    <HackirienCard />
                  </div>
                  <div className="column is-one-thirds">
                    <HackirienCard />
                  </div>
                </div>

                <Link to="/Projets">
                  <button class="button is-black is-medium">
                    More Projects from Hackiriens
                  </button>
                </Link>
              </div>
            </div>
        </div>
    );
}

export default Home;
