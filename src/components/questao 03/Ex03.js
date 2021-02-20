import React, {useState} from 'react';
import {encontrarMaior, encontrarMenor} from './questao03';
import '../../styles/cards.css';

export default function Ex03(){
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");

  const [lowerValue, setLowerValue] = useState("");
  const [biggerValue, setBiggerValue] = useState("");

  const handleQuestao = _ => {
    let temp = encontrarMaior(firstValue, secondValue, thirdValue);
    if(isNaN(temp)){
      alert("Valores inseridos não são números");
    } else {
      setBiggerValue(temp);
      setLowerValue(encontrarMenor(firstValue, secondValue, thirdValue));
    }
  }

  return(
    <div className="question-03 card">
      <p className="question-title">Exercício 03</p>
      <div>
        <p className="card-command">Insira três valores:</p>
      </div>
      <div className="card-inputs">
        <input 
          type="text" 
          onChange={event => {setFirstValue(event.target.value)}}
        />
        <input 
          type="text" 
          onChange={event => {setSecondValue(event.target.value)}}  
        />
        <input 
          type="text" 
          onChange={event => {setThirdValue(event.target.value)}}
        />  
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>O maior valor é: {biggerValue}</p>
        <p>O menor valor é: {lowerValue}</p>
      </div>
    </div>
  );
}