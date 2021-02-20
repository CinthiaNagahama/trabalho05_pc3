import React, {useState} from 'react';
import {encontraMedia} from './questao05';
import '../../styles/cards.css';

export default function Ex05(){
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [thirdValue, setThirdValue] = useState();
  const [average, setAverage] = useState();
  
  function handleQuestao() {
    setAverage(encontraMedia(firstValue, secondValue, thirdValue));
  }
  return(
    <div className="question-05 card">
      <p className="question-title">Exercício 05</p>
      <div>
        <p className="card-command">Insira três valores:</p>
      </div>
      <div className="card-inputs">
        <input 
          type="text" 
          onChange={event => {setFirstValue(parseInt(event.target.value))}}
        />
        <input 
          type="text" 
          onChange={event => {setSecondValue(parseInt(event.target.value))}}  
        />
        <input 
          type="text" 
          onChange={event => {setThirdValue(parseInt(event.target.value))}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>A média aritmética é: {average}</p>
      </div>
    </div>
  );
}