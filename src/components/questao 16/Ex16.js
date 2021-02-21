import React, {useState} from 'react';
import {powerStepsWithPow} from './questao16';
import '../../styles/cards.css';

export default function Ex16(){
  const [base, setBase] = useState(1);
  const [pow, setPow] = useState(0);
  const [res, setRes] = useState(1);

  const handleQuestao = _ => {
    setRes(powerStepsWithPow(base, pow));
  }

  return(
    <div className="question-16 card">
      <p className="question-title">Exercício 16</p>
      <div>
        <p className="card-command">Calculadora de Exponencial</p>
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira a base</p>
        <input 
          type="number"
          onChange={event => {setBase(event.target.value)}}
        />
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira o expoente</p>         
        <input 
            type="number"
            onChange={event => {setPow(event.target.value)}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Calcular</span>  
        </div>
      </div>
      <div>
        <p>{base}^{pow} = {res}</p>
      </div>
    </div>
  );
}