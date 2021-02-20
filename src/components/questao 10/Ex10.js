import React, {useState} from 'react';
import {findPrimesBetween} from './questao10';
import '../../styles/cards.css';

export default function Ex10(){
  const [primesBetween, setPrimesBetween] = useState(findPrimesBetween(0, 200).join(", "));

  return(
    <div className="question-10 card">
      <p className="question-title">Exercício 10</p>
      <div>
        <p className="card-command">Os primos de 0 a 200 são:</p>
      </div>
      <div className="multiple">
        <p className="secret-card-command">{primesBetween}</p>
      </div>
    </div>
  );
}