import React from 'react';
import styleflowerHeader from './flowerHeader.module.css'
import FlowerSvg from './flowerSvg'

const FlowerHeader = (props) => {
    
    return (
        <div className={styleflowerHeader.tittle}> 
          <FlowerSvg width="25px" height="25px" />
          <span>{props.titulo}</span>
          <div className={styleflowerHeader.line}/>
        </div>
    );
  };
  
  export default FlowerHeader;