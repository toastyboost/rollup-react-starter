import * as React from 'react';

import { Component } from '../src';

export default { title: 'Develop' };

export const withConsole = () => {
  const [isClicked, toggle] = React.useState(false);

  const handleClick = () => {
    toggle(!isClicked);
  };

  console.log(`Button state => ${isClicked}`);

  return (
    <button onClick={handleClick}>
      <Component text={'text'} object={{ a: 't', b: 'b' }} />
      Hello Button {isClicked && 'clicked!'}
    </button>
  );
};
