import React, {useState} from 'react';
import {crescent} from './questao19';
import '../../styles/cards.css';

export default function Ex19() {
  const [string, setString] = useState("");

  return (
    <div className="question-19 card">
      <p className="question-title">Exercício 19</p>
      <div>
        <p className="card-command">Organiza em ordem crescente</p>
        <p className="card-command">Digite algo</p>
      </div>
      <div className="card-inputs">        
        <input 
          type="text"
          onChange={event => {setString(crescent(event.target.value))}}
        />
        </div>
      <div>
        <p>{string}</p>
      </div>
    </div>
  );
}

