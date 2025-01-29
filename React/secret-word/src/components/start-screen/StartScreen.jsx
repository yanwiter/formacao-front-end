import React from 'react'
import './StartScreen.css'
import PropTypes from "prop-types";

const StartScreen = ({startGame}) => {
  return (
    <div className="card">
      <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar jogo</button>
      </div>
    </div>
  )
}

StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired
}

export default StartScreen