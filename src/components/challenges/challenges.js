import React from 'react';
import Challenge1 from './Challenge1';

  const Components = {
    challenge1: Challenge1,
  };
  
  export default block => {
    if (typeof Components[block.component] !== "undefined") {
      return React.createElement(Components[block.component]);
    }
    return React.createElement(
        () => <div>Coming Soon</div>,
      );
  };