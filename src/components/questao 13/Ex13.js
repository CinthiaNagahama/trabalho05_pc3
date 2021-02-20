import React, {useState} from 'react';
import {power} from './questao13';
import '../../styles/cards.css';

export default function Ex13(){
  const [base, setBase] = useState(1);
  const [pow, setPow] = useState(0);
  const [res, setRes] = useState(1);

  const handleQuestao = _ => {
    let temp = power(base, pow);
    if(isNaN(temp)){
      alert("Valores dados não são números");
    } else {
      setRes(temp);
    }
  }

  return(
    <div className="question-13 card">
      <p className="question-title">Exercício 13</p>
      <div>
        <p className="card-command">Calculadora de Exponencial</p>
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira a base</p>
        <input 
          type="text"
          onChange={event => {setBase(event.target.value)}}
        />
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira o expoente</p>         
        <input 
            type="text"
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