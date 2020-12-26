import React from 'react';
import Lesson1 from './Lesson1';

  const Components = {
    lesson1: Lesson1,
  };
  
  export default block => {
    if (typeof Components[block.component] !== "undefined") {
      return React.createElement(Components[block.component]);
    }
    return React.createElement(
        () => <div>Coming Soon</div>,
        { key: block._uid }
      );
  };