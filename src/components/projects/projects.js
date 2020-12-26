import React from 'react';
import ProjectMadLibs from './ProjectMadLibs';

  const Components = {
    projectmadlibs: ProjectMadLibs,
  };
  
  export default block => {
    if (typeof Components[block.component] !== "undefined") {
      return React.createElement(Components[block.component]);
    }
    return React.createElement(
        () => <div>Coming Soon</div>,
      );
  };