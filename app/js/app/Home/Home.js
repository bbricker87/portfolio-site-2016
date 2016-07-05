import React from 'react';

import Nav from './NavHome';

export default function(props) {
  return(
    <div>
      <div className="landing container">
        <img className="landing__image" src="https://placehold.it/750x750"/>
      </div>
      <Nav />
    </div>
  );
};
