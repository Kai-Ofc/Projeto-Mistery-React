import React from 'react';
import styleTeamHeader from './TeamHeader.module.css'

const TeamHeader = (props) => {
    
    return (
        <div className={styleTeamHeader.tittle}> 
          <span>{props.titulo}</span>
          <div className={styleTeamHeader.line}/>
        </div>
    );
  };
  
  export default TeamHeader;