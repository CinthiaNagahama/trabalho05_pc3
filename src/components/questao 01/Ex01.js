import React from 'react';
import {questao01} from './questao01';
import '../../styles/cards.css';

questao01();

export default function Ex01(){
  return (
    <div className="question-03 card">
      <p className="question-title">Exercício 01</p>
      <div>
        <p className="card-command">Envia um alerta quando a página carrega</p>
      </div>
    </div>
  );
}