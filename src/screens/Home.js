import React from 'react';
import Ex01 from '../components/questao 01/Ex01';
import Ex02 from '../components/questao 02/Ex02';
import Ex03 from '../components/questao 03/Ex03';
import Ex04 from '../components/questao 04/Ex04';
import Ex05 from '../components/questao 05/Ex05';
import Ex06 from '../components/questao 06/Ex06';
import Ex07 from '../components/questao 07/Ex07';
import Ex08 from '../components/questao 08/Ex08';
import Ex09 from '../components/questao 09/Ex09';
import Ex10 from '../components/questao 10/Ex10';
import Ex11 from '../components/questao 11/Ex11';
import Ex12 from '../components/questao 12/Ex12';
import Ex13 from '../components/questao 13/Ex13';
import Ex14 from '../components/questao 14/Ex14';
import Ex15 from '../components/questao 15/Ex15';
import Ex16 from '../components/questao 16/Ex16';
import Ex17 from '../components/questao 17/Ex17';
import Ex18 from '../components/questao 18/Ex18';
import Ex19 from '../components/questao 19/Ex19';
import Ex20 from '../components/questao 20/Ex20';

import '../styles/home.css';

export default function Home(){
  return(
    <div className="home-container">
      <div className="title-trabalho">
        <h3>Programação de Computadores III</h3>
        <h1>TRABALHO 05</h1>
        <h3>por: Cinthia Mie N. Ungefehr</h3>
      </div>
      
      <div className="questions-container"> 
        <Ex01/> 
        <Ex02/>
        <Ex03/>
        <Ex04/>
        <Ex05/>
        <Ex06/>
        <Ex07/>
        <Ex08/>
        <Ex09/>
        <Ex10/>
        <Ex11/>
        <Ex12/>
        <Ex13/>
        <Ex14/>
        <Ex15/>
        <Ex16/>
        <Ex17/>
        <Ex18/>
        <Ex19/>
        <Ex20/>
      </div>
      <div className="footer">
        <h3>Feito por:</h3>
        <h2>Cinthia Mie N. Ungefehr</h2>
        <p id="git">Cheque o código no meu 
          <a 
            href="https://github.com/CinthiaNagahama/programacao_de_computadores_3/tree/main/Trabalho05/src"
            target="blank"
          > Git Hub</a>
        </p>
      </div>
    </div>
  );
}