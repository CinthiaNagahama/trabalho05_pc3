import React, {useState} from 'react';
import {invertNative} from './questao20';
import '../../styles/cards.css';

export default function Ex20(){
  const [sequence, setSequence] = useState("");

  return (
    <div className="question-20 card">
      <p className="question-title">Exercício 20</p>
      <div>
        <p className="card-command">Invertedor de Palavras 2.0</p>
        <p className="card-command">Digite algo</p>
      </div>
      <div className="card-inputs">              
        <input 
          type="text"
          onChange={event => {setSequence(invertNative(event.target.value))}}
        />
      </div>
      <div>
        <p>{sequence}</p>
      </div>
    </div>
  );
}
