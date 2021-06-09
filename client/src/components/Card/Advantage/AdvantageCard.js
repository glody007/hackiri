import React from 'react';
import './AdvantageCard.css';

const AdvantageCard = (props) => {
    return (
      <div class={`card ${props.color}`}>
        <div class="card-content">
          <div class="content">
            <h1 class="subtitle is-5">{props.title}</h1>
            <p class="subtitle is-6">
              {props.content}
            </p>
          </div>
        </div>
      </div>
    )
};

export default AdvantageCard;
