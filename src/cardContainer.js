// src/CardContainer.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './img';

function CardContainer() {
  return (
    <Card style={{ width: '280px',backgroundColor:'black',position:'relative',top:'100px',left:'300px',fontFamily:'monospace',color:'white' }}>
      
      <Image />
      <Card.Body>
        <Name />
        <Price />
        <Description />
      </Card.Body>
    </Card>
  );
} 

export default CardContainer;
