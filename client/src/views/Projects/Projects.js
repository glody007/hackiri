import React from 'react';
import robot from '../../assets/robot.jpg';
import './Projects.css';
import NavBar from "../../components/Header/NavBar";
import HackirienCard from "../../components/Card/Hackirien/HackirienCard";

function Projects() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const listProjects = numbers.map((number) =>
      <div key={number.toString()} className="column is-3">
          <HackirienCard />
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
                     sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua.
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
