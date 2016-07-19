import React from 'react';

import Nav from '../nav/nav';

export default function(props) {
  return(
    <div>
      <div className="landing container">
        <img className="landing__image" src="https://placehold.it/750x750"/>
      </div>
      <Nav pages={props.pages} home={true}/>
    </div>
  );
};
