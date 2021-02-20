import React, {useState} from 'react';
import {fibonacci} from './questao08';
import '../../styles/cards.css';

export default function Ex08(){
  const [max, setMax] = useState(0);
  const [showFibonacci, setShowFibonacci] = useState(0);
  
  function handleQuestao(){
    setShowFibonacci(fibonacci(max));
  }

  return(
    <div className="question-08 card">
      <p className="question-title">Exercício 08</p>
      <div>
        <p className="card-command">Insira n:</p>
      </div>
      <div className="card-inputs">   
        <input 
          type="text"
          onChange={event => {setMax(parseInt(event.target.value))}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>O soma da Sequência de Fibonacci até o {max}° termo é {showFibonacci}</p>
      </div>
    </div> 
  );
}