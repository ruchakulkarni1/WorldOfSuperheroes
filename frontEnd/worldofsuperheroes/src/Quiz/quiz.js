import React, { useState } from 'react';
import './quiz.css';
import { useHistory } from "react-router-dom";

function Quiz(props) { 
    const history = useHistory();
    const [currentQuestion, setCurrentQuestion] = useState(0);
        const [myAnswer, setMyAnswer] = useState("");
        const [score, setScore] = useState(0);
        const [finish, setFinish] = useState(false);
        const [show, setShow] = useState(false);
        const [clickAnswer, setClickAnswer] = useState(false);
          
    if(props.data) {
        console.log('Here',props.filterData);
        const checkAnswer = (variant) => {
          setMyAnswer(variant);
          setClickAnswer(true);
        };
      
        const checkCorrectAnswer = () => {
          if (myAnswer === props.data[currentQuestion].answer) {
            setScore(score + 1);
          }
        };
      
        const showAnswer = () => {
          setShow((show) => !show);
        };
        const reset = () => {
          setShow(false);
          setClickAnswer(false);
        };
      
        const finishHandler = () => {
          if (currentQuestion === props.data.length - 1) {
            setFinish(true);
          }
        };
      
        const startOver = () => {
          setCurrentQuestion(0);
          setFinish(false);
          setMyAnswer("");
          setScore(0);
          setShow(false);
          history.push("/quiz");
        };
        
        const mainfunc = () => {
                return (
                    <div class="wrapper">
                    <p class="textclass">
                      {props.data[currentQuestion].question}
                    </p>
                    <span class="m-2 border-2 border-black mx-auto px-2 bg-gray text-pink-400 rounded-lg text-center">
                      {`${currentQuestion+1}/${props.data.length}`}
                    </span>
                    {props.data[currentQuestion].variants.map((variant) => (
                      <div class="blockdesign">
                        <p
                          key={variant.id}
                          class={`variant ${
                            myAnswer === variant
                              ? myAnswer === props.data[currentQuestion].answer
                                ? "correctAnswer"
                                : "incorrectAnswer"
                              : null
                          }`}
                          onClick={() => checkAnswer(variant)}
                        >
                          {variant}
                        </p>
                      </div>
                    ))}
          
                    {clickAnswer && (
                      <button class = "showAnsBtn"
                        onClick={() => showAnswer()}
                      >
                        SHOW ANSWER
                      </button>
                    )}
                    {show && (
                      <p class="showAnswer">
                        Correct Answer: {props.data[currentQuestion].answer}
                      </p>
                    )}
          
                    {currentQuestion < props.data.length -1 && (
                      <button
                        class="nextButton"
                        onClick={() => {
                          setCurrentQuestion(currentQuestion + 1);
                          checkCorrectAnswer();
                          reset();
                        }}
                      >
                        NEXT
                      </button>
                    )}
          
                    {currentQuestion === props.data.length-1  && (
                      <button
                        class="finishButton"
                        onClick={() => finishHandler()}
                      >
                        FINISH
                      </button>
                    )}
                  </div>
                )
        }
        if (finish) {
          return (
            <div class="maindivquiz">
              <div class="wrapper">
                <h3 class="textclass">
                  {`Game Over!
                  Your Final Score is
                  ${score}/${props.data.length}
                  points.`}
                </h3>
                <button
                  class= "nextButton"
                  onClick={() => startOver()}
                >
                  Start Over
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div class="maindivquiz">
                <div>{mainfunc()}</div>
            </div>
          );
        }
      
    }
}

export default Quiz;