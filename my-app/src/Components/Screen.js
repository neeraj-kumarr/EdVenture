import React, { useState } from 'react';

const LineGame = () => {
  const names = ['Ear', 'Eye', 'Lip', ' Nose', 'Hand'];
  const images = ['lip.jpg', 'nose.jpg', 'eye.jpg', 'hand.jpg', 'ear.jpg'];

  const [userSelections, setUserSelections] = useState({});
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleSelect = (name, image) => {
    setUserSelections((prevSelections) => ({
      ...prevSelections,
      [name]: image,
    }));
  };

  const checkResults = () => {
    const correctMatches = {
      'Lip': 'lip.jpg',
      'Nose': 'nose.jpg',
      'Ear': 'ear.jpg',
      'Eye': 'eye.jpg',
      'Hand': 'hand.jpg',
    };

    const isCorrect = Object.entries(correctMatches).every(([name, image]) => userSelections[name] === image);

    if (isCorrect) {
      alert('Congratulations! You matched all the items.');
      setGameCompleted(true);
    } else {
      alert('Oops! Try again.');
    }
  };

  const resetGame = () => {
    setUserSelections({});
    setGameCompleted(false);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div>
        <h2>Line Game</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, margin: '0 10px' }}>
          <h3>Names</h3>
          {names.map((name) => (
            <div key={name} style={{ marginBottom: '20px' }}>
              <div>{name}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, margin: '0 10px', position: 'relative' }}>
          <h3>Images</h3>
          {images.map((image, index) => (
            <div key={image} style={{ position: 'relative' }}>
              <img src={image} alt={image} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              {userSelections[names[index]] && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '100%',
                    width: '20px',
                    height: '2px',
                    backgroundColor: 'red',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={checkResults} disabled={gameCompleted}>
          Check Results
        </button>
      </div>
      {/* {gameCompleted && ( */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={resetGame}>Play Again</button>
        </div>
      {/* )} */}
    </div>
  );
};

export default LineGame;
