import React, { useState } from 'react';

function Quiz(props) { 
    const [currentQuestion, setCurrentQuestion] = useState(0);
	    const [showScore, setShowScore] = useState(false);
	    const [score, setScore] = useState(0);
        
    if(props) {
        const handleAnswerOptionClick = (isCorrect) => {
            if (isCorrect) {
                setScore(score + 1);
                console.log(score);
            }
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < props.data.length) {
                setCurrentQuestion(nextQuestion);
                console.log(currentQuestion);
            } else {
                setShowScore(true);
            }
        };
        
        const playAgain = () => {
            setShowScore(0)
            setCurrentQuestion(0);
            setScore(0);
        }
        return (
            <div className='quiz-app'>
                {showScore ? (
                    <div>
                    <div className='score-section'>
                        You scored {score} out of {props.data.length}
                    </div>
                    <div><button onClick={playAgain}>Play Again</button></div>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{props.data.length}
                            </div>
                            <div className='question-text'>{props.data[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {props.data[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default Quiz;