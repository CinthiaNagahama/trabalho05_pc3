import React from 'react';
import {questao02} from './questao02';
import '../../styles/cards.css';

export default function Ex02(){
  function handleQuestao(){
    questao02();
  }

  return(
    <div className="question-02 card">
      <p className="question-title">Exercício 02</p>
      <div className="question-container">
        <p className="card-command">Clique no Botão</p>
        <div className="card-button-container">
          <div className="card-button" onClick={handleQuestao}>
            <span>Botão</span>  
          </div>
        </div>
      </div>
    </div>
  );
}