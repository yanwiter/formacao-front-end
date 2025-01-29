import React from 'react'
import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>...Ops</h1>
      <h2> Fim de jogo</h2>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Jogar novamente</button>
    </div>
  )
}

export default GameOver