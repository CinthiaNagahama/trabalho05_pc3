import React, {Fragment, useState} from 'react';
import {sumMatrixPairs} from './questao18';
import '../../styles/cards.css';

export default function Ex18(){
  const [linhas, setLinhas] = useState(0);
  const [colunas, setColunas] = useState(0);
  const [matrix, setMatrix] = useState([[]]);

  const handleMatrixCreation = _ => {
    let tempMatrix = [[]];
    for(let i = 0; i < linhas; i++){
      if(i > 0){
        tempMatrix.push([]);
      }
      for(let j = 0; j < colunas; j++){
        let tempId = i + "" + j;
        tempMatrix[i].push(tempId);
      }
    }
    setMatrix(tempMatrix);
  }
  
  const [res, setRes] = useState({sum: 0});
  const handleQuestao = () => {
    let temp = sumMatrixPairs(matrix);
    if(typeof(temp) == "undefined"){
      alert("Valores inseridos não estão no formato adequado")
    } else {
      setRes(temp);
    }
  }

  return(
    <div className="question-18 card"> 
      <p className="question-title">Exercício 18</p>
      <div>
        <p className="card-command">Calculadora da Soma dos Pares em uma Matriz</p>
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira a Quantidade de Colunas:</p>
        <input 
          type="text" 
          onChange={event => {setColunas(event.target.value)}}
        />
      </div>
      <div className="card-inputs">
        <p className="card-command">Insira a Quantidade de Linhas</p>
        <input 
          type="text" 
          onChange={event => {setLinhas(event.target.value)}}
        />
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleMatrixCreation()}>
          <span>Gerar</span>  
        </div>
      </div>
      <div className="matrix">
        {
          matrix.map((row, i) => (
            <div key={i} className="row">
              {
                row.map((column, j) => (
                  <input 
                    type="text"
                    key={column}
                    id={column}
                    onChange={(event) => (matrix[i][j] = event.target.value)}
                  />
                ))
              }
            </div>
        ))}
      </div>
      <div className="card-button-container">
        <div className="card-button" onClick={() => handleQuestao()}>
          <span>Calcular</span>  
        </div>
      </div>
      <div className="matrix-result">
        <p>Soma dos Pares na Matrix: {res.sum}</p>
      </div>
    </div>
  );
}