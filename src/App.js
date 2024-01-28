// src/App.js

import React from 'react';
import CardContainer from './cardContainer';

const firstName = prompt(" ton nom ?"); 
function App() {
  return (
    <div>
      <CardContainer firstName={firstName} />
      <p style={{position:'relative',top:'100px',left:'300px'}}>Bonjour, {firstName ? firstName : "là"} </p>
     <>{firstName && <img src='./assets/img/confirm.jpg'/>}</>
    </div>
  );
}

export default App;