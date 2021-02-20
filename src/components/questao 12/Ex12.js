import React, {useState} from 'react';
import {invert} from './questao12';
import '../../styles/cards.css';

export default function Ex12(){
  const [string, setString] = useState("");

  return(
    <div className="question-12 card">
      <p className="question-title">Exercício 12</p>
      <div>
        <p className="card-command">Invertedor de Palavras</p>
        <p>Digite algo</p>
      </div>
      <div className="card-inputs"> 
        <input 
          type="text" 
          id="string"
          onChange={event => {setString(invert(event.target.value))}}
        />
      </div>
      <div>
        <p>{string}</p>
      </div>
    </div>
  );
}