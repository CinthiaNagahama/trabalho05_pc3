import React, {useState} from 'react';
import {findDelta} from './questao11';
import '../../styles/cards.css';

export default function Ex11(){
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [delta, setDelta] = useState("");

  const handleQuestao = _ => {
    let temp = findDelta(a, b, c);
    if(isNaN(temp)){
      alert("Valores dados não são números");
    } else {
      setDelta(temp);
    }
  }

  return(
    <div className="question-11 card">
      <p className="question-title">Exercício 11</p>
      <div>
        <p className="card-command">Calcule o delta de uma função quadrática</p>
        <p className="secret-card-command">Exemplo de função quadrática: ax^2 + bx + c</p>
      </div>
      <div className="card-inputs"> 
        <input 
          type="text" 
          placeholder="a"
          onChange={event => {setA(event.target.value)}}
        />
        <input 
          type="text" 
          placeholder="b"
          onChange={event => {setB(event.target.value)}}  
        /> 
        <input 
          type="text" 
          placeholder="c"
          onChange={event => {setC(event.target.value)}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>Delta = {delta}</p>
      </div>
    </div>
  );
}