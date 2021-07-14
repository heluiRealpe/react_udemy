import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// console.log(divRoot);

ReactDOM.render( <PrimeraApp value= 'Hola soy Héctor' />, divRoot );



// ReactDOM.render( <CounterApp value={10} />, divRoot );