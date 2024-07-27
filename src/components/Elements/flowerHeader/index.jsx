import React from 'react';
import styleflowerHeader from './flowerHeader.module.css'
import RoseSvg from '../roseSvg'

const FlowerHeader = (props) => {
    
    return (
        <div className={styleflowerHeader.tittle}> 
          <RoseSvg width="1.8em" height="1.8em" />
          <span>{props.titulo}</span>
          <div className={styleflowerHeader.line}/>
        </div>
    );
  };
  
  export default FlowerHeader;