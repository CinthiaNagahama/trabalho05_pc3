import React, {useState} from 'react';
import {findPrime} from './questao09';
import '../../styles/cards.css';

export default function Ex09(){
  const [prime, setPrime] = useState();
  const [position, setPosition] = useState(1001);
  const [secondTime, setSecondTime] = useState(false);

  const handleQuestao = _ => {
    setPrime(findPrime(position));
    setSecondTime(true);
  }

  return(
    <div className="question-09 card">
      <p className="question-title">Exercício 09</p>
      <div>
        <p className="card-command">Você sabe qual é o {position}° número primo?</p>
      </div>
      <div>
        {
          secondTime ?
            <p className="secret-card-command">Gostaria de descobrir algum outro? Insira a posição abaixo</p> 
          :
            null
        }
      </div>
      <div className="card-inputs">
      {
          secondTime ?
            <input 
              type="text"
              onChange={event => {
                setPosition(event.target.value)
                setPrime("-")
              }}
            />
          :
            null
        }       
        
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Descobrir</span>  
        </div>
      </div>
      <div>
        <p>O {position}° número primo é: {prime}</p>
      </div>
    </div>
  );
}