import React, {useState} from 'react';
import {findImc} from './questao06';
import '../../styles/cards.css';

export default function Ex06(){  
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setIMC] = useState();
  
  function handleQuestao() {
    let temp = findImc(altura, peso);
    if(isNaN(temp)){
      alert("Valores inseridos não são números");
    } else {
      setIMC(temp);
    }
  }

  return(  
    <div className="question-06 card">
      <p className="question-title">Exercício 06</p>
      
      <div className="card-inputs">
        <p className="card-command">Insira seu peso em kg:</p>
        <input 
          type="text" 
          onChange={event => {setPeso(event.target.value)}}
        />
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira sua altura em metros:</p>
        <input 
          type="text" 
          onChange={event => {setAltura(event.target.value)}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>seu IMC é {imc}</p>
      </div>
    </div>
  );
}