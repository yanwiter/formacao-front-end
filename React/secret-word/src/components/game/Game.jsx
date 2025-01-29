import { React, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const prizes = [10, 20, 50, 100, 200, 500];
  const [letter, setLetter] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [selectedPrizeIndex, setSelectedPrizeIndex] = useState(null);
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  const spinWheel = () => {
    if (spinning) return; // Evitar spins enquanto está girando
    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * prizes.length);
    setSelectedPrizeIndex(randomIndex); // Atualiza o prêmio sorteado

    const spins = 3;
    const degreesPerPrize = 360 / prizes.length;
    const finalRotation = spins * 360 + randomIndex * degreesPerPrize;

    const wheel = document.querySelector(".wheel");
    wheel.style.transition = "transform 2s cubic-bezier(0.25, 1, 0.5, 1)";
    wheel.style.transform = `rotate(${finalRotation}deg)`;

    setTimeout(() => {
      setSpinning(false);
      wheel.style.transition = "none";
      wheel.style.transform = `rotate(${randomIndex * degreesPerPrize}deg)`;
    }, 2000);
  };

  return (
    <div className="card">
      <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h3 className="tip">
          Dica: <span>{pickedCategory}</span>
        </h3>

        <p>Você ainda tem {guesses} chances</p>

        <div className="wordContainer">
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          )}
        </div>

        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button>Jogar</button>
          </form>
        </div>

        <div className="wrongLetterContainer">
          <p>Letras já utilizadas</p>
          {wrongLetters.map((letter, index) => (
            <span key={index}>{letter}, </span>
          ))}
        </div>

        {/* Roda de prêmios */}
        {/*         <div className="wheelContainer">
          <p>Gire a roda para ganhar pontos extras!</p>
          <button className="wheelButton" onClick={spinWheel} disabled={spinning}>
            {spinning ? "Girando..." : "Girar a Roda"}
          </button>
          <div className={`wheel ${spinning ? "spinning" : ""}`}>
              <div className="wheelSegment">
                  
              </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedWord: PropTypes.string.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game;
