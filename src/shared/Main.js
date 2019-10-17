import React from 'react';
//import MainDiagram from 'components/MainDiagram';
import { BrowserRouter } from 'react-router-dom';
import '../App.css';
import Template from 'client/Template';

function Main() {
  return (
        <BrowserRouter>
          <Template/>
        </BrowserRouter>
  );
}

export default Main;
