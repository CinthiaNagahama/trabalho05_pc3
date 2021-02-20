import React, {useState} from 'react';
import {ehMenorDeIdade} from './questao04';
import '../../styles/cards.css';

export default function Ex04(){
  const [idade, setIdade] = useState();
  const [classificacao, setClassificacao] = useState("");
  
  const handleQuestao = _ => {
    setClassificacao(ehMenorDeIdade(idade));
  }

  return(   
    <div className="question-04 card">
      <p className="question-title">Exercício 04</p>
      <div>
        <p className="card-command">Insira sua idade:</p>
      </div>
      <div className="card-inputs">        
        <input 
          type="text" 
          onChange={event => {setIdade(parseInt(event.target.value))}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>O usuário é {classificacao}</p>
      </div>
    </div>
  );
}