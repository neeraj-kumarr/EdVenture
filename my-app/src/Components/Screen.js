import React, { useState, useEffect, useRef } from 'react';

const DrawLineGame = () => {
  const texts = ['Eye', 'Nose', 'Lip', 'Hand', 'Teeth'];
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYmMqhKFyNP3WVJZYo6JCmnxn-dOsQxeoHw&usqp=CAU',
    'https://img.freepik.com/free-vector/human-teeth-model-white-background_1308-108364.jpg',
    'https://cdn.britannica.com/79/150179-120-3A8438B1/human-eye.jpg',
    'https://img.freepik.com/premium-vector/human-nose-realistic-vector-illustration_476141-1266.jpg',
    'https://thumbs.dreamstime.com/b/female-hand-palm-isolated-780255.jpg',
  ];

  const canvasRef = useRef(null);
  const [userSelections, setUserSelections] = useState({});
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [userSelections, gameCompleted]);

  const handleSelect = (text, image) => {
    if (!gameCompleted) {
      setUserSelections((prevSelections) => ({
        ...prevSelections,
        [text]: image,
      }));
    }
  };

  const checkResults = () => {
    const correctMatches = {
      'Eye': 'https://cdn.britannica.com/79/150179-120-3A8438B1/human-eye.jpg',
      'Nose': 'https://img.freepik.com/premium-vector/human-nose-realistic-vector-illustration_476141-1266.jpg',
      'Lip': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYmMqhKFyNP3WVJZYo6JCmnxn-dOsQxeoHw&usqp=CAU',
      'Hand': 'https://thumbs.dreamstime.com/b/female-hand-palm-isolated-780255.jpg',
      'Teeth': 'https://img.freepik.com/free-vector/human-teeth-model-white-background_1308-108364.jpg',
    };

    const isCorrect = Object.entries(correctMatches).every(([text, image]) => userSelections[text] === image);

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
    <>
     
           
                <div
                  style={{
                    textAlign: 'center',
                    margin: '20px',
                    background: `url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat`,
                    width: '100%',
                    height: '100vh',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, margin: '0 10px' }}>
                      {texts.map((text) => (
                        <div
                          key={text}
                          style={{
                            marginLeft: 'inherit',
                            marginTop:'30px',
                            marginBottom: '80px',
                            fontWeight:'bold',
                            cursor: 'pointer',
                            fontFamily: 'sans sarif',
                            fontSize:'25px',
                            padding: '10px',
                            color: 'Brown',
                            borderRadius: '5px',

                          }}
                          onClick={() => handleSelect(text, userSelections[text])}
                        >
                          <div>{text}</div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        spacing: '1',
                        margin: '10px',
                        position: 'relative',
                        padding: '20px',
                        borderRadius: '5px',
                      }}
                    >
                      {images.map((image) => (
                        <div
                          key={image}
                          style={{
                            position: 'relative',
                            marginBottom: '20px',
                            textAlign: 'center',
                          }}
                        >
                          <img
                            src={image}
                            alt={image}
                            style={{
                              width: '100px',
                              height: '100px',
                              cursor: 'pointer',
                              borderRadius: '5px',
                            }}
                            onClick={() => handleSelect(image, image)}
                          />
                        </div>
                      ))}
                      <canvas
                        ref={canvasRef}
                        width={500}
                        height={300}
                        style={{ position: 'absolute', top: 0, left: 0, borderRadius: '5px' }}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={checkResults}
                      disabled={gameCompleted}
                      style={{
                        marginRight: '10px',
                        background: '#008CBA',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                      }}
                    >
                      Check Results
                    </button>
                    <button
                      onClick={resetGame}
                      style={{
                        background: '#008CBA',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                      }}
                    >
                      Play Again
                    </button>
                  </div>
                </div>
      
    
    </>
  );
};

export default DrawLineGame;
