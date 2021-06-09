import React from 'react';
import './HackirienCard.css';

const HackirienCard = (props) => {
    return (
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={props.project.imageUrl} alt="Placeholder image"/>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src={props.project.creatorImageUrl} alt="Placeholder image"/>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{props.project.creator}</p>
              <p class="subtitle is-6">{props.project.creatorAlias}</p>
            </div>
          </div>

          <div class="content">
            {props.project.description}
          </div>
        </div>
      </div>
    )
};

export default HackirienCard;
