import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  let playerNum = 1

  const [poemLines, setPoemLines] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState(playerNum)
  const [isSubmitted, setSubmissionStatus] = useState(false)

  const setPlayer = (updatedPlayer) => {
    updatedPlayer = updatedPlayer += 1;
    setCurrentPlayer(updatedPlayer);
  };

  const sendSubmission = (newPoemLine) => {
    const formatLine = FIELDS.map((field) => {
      if (field.key) {
        return newPoemLine[field.key];
      } else {
        return field;
      }
    }).join(' ');

    setPoemLines([...poemLines, formatLine]);
    setCurrentPlayer(setPlayer);
  };

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const revealPoem = () => {
    setSubmissionStatus(true);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      { isSubmitted || poemLines.length < 1 ? '': <RecentSubmission submission={poemLines.length > 0 ? poemLines[poemLines.length - 1] : '' } /> }

      { isSubmitted ? '': <PlayerSubmissionForm fields={FIELDS} index={currentPlayer} sendSubmission={sendSubmission} /> }
      
      <FinalPoem isSubmitted={isSubmitted} submissions={poemLines} revealPoem={revealPoem}/>

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;