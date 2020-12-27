import React from 'react';
import Challenge1 from './Challenge1';
import Challenge2 from './Challenge2';

  const Components = {
    challenge1: Challenge1,
    challenge2: Challenge2
  };
  
  export default block => {
    if (typeof Components[block.component] !== "undefined") {
      return React.createElement(Components[block.component]);
    }
    return React.createElement(
        () => <div>Coming Soon</div>,
      );
  };