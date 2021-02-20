import React, {useState} from 'react';
import {multiplosDe3Ou5} from './questao07';
import '../../styles/cards.css';

export default function Ex07(){
  const [max, setMax] = useState(0);  
  const [showMultiples, setShowMultiples] = useState([]);
  
  function handleQuestao(){
    setShowMultiples(multiplosDe3Ou5(max).join(", "));
  }

  return(    
    <div className="question-07 card">
      <p className="question-title">Exercício 07</p>
      <div>
        <p className="card-command">Insira o valor máximo:</p>
      </div>
      <div className="card-inputs">      
        <input 
          type="text" 
          id="max"
          onChange={event => {setMax(parseInt(event.target.value))}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Enviar</span>  
        </div>
      </div>
      <div>
        <p>Os múltiplos de 3 ou de 5 até {max} são: {showMultiples}</p>
      </div>
    </div>
  );
}