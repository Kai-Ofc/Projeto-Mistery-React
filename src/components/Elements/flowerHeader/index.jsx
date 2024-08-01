import React from 'react';
import styleflowerHeader from './flowerHeader.module.css'
import RoseSvg from '../roseSvg'

const FlowerHeader = (props) => {
    
    return (
        <div className={styleflowerHeader.tittle}> 
          <RoseSvg width="35px" height="35px" />
          <span>{props.titulo}</span>
          <div className={styleflowerHeader.line}/>
        </div>
    );
  };
  
  export default FlowerHeader;