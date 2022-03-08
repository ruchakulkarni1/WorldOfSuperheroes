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

        if(props) {
            const quizData = props.data.filter((x)=>x.category === props.filteredData);
            const checkAnswer = (variantid,variant,variants) => {
            console.log(variantid, variants);
            variants.forEach(element => {
                if(element !== variantid) {
                    let div = document.getElementById(element);
                    div.style.pointerEvents = 'none';
                }
            });
            setMyAnswer(variant);
            setClickAnswer(true);
        };
      
        const checkCorrectAnswer = () => {
          if (myAnswer === quizData[currentQuestion].answer) {
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
            checkCorrectAnswer();
            reset();
          if (currentQuestion === quizData.length-1) {
            setFinish(true);
          }
        };
      
        const startOver = () => {
          setCurrentQuestion(0);
          setFinish(false);
          setMyAnswer("");
          setScore(0);
          setShow(false);
          history.push("/categories");
        };
        const somefunc = () => {
            const queRem = quizData.length - currentQuestion
            return(
                <div class = "playBox">
                    <div id="playGameBox">
                        <span id="remainingBox" class="smallLine">
                            <span class="timerScoreTitle">Remaining</span>
                            <span id="guessesremaining">{queRem}</span>
                        </span>
                        <span id="correctBox" class="smallLine">
                            <span class="timerScoreTitle">Correct</span>
                            <span>{score}</span>
                        </span>
                        <span id="wrongBox" class="smallLine">
                            <span class="timerScoreTitle">Wrong</span>
                            <span>{quizData.length-queRem-score}</span>
                        </span>
                        <span id = "remainingBox" class = "smallLine">
                            <span class = "timerScoreTitle">Score</span>
                            <span>{score}/{quizData.length}</span>
                        </span>
                    </div>
                </div>
          )
        }
        
        const buttonClickFunction = (variants) => {
            console.log("In blocl",variants);
            variants.forEach(element => {
                const div = document.getElementById(element);
                div.style.pointerEvents = 'auto';
            });
            setCurrentQuestion(currentQuestion + 1);
            checkCorrectAnswer();
            reset();
        }

        const mainfunc = () => {
                return (
                    <div class="wrapper">
                    <h3 class = "headerText"> Welcome to {props.filteredData} Quiz!!!!</h3>
                    <div class ="maindivquiz">
                    <div>{somefunc()}</div>
                    <h4 class="textclass">
                      Q{currentQuestion+1}. {quizData[currentQuestion].question}
                    </h4>
                    {quizData[currentQuestion].variants.map((variant) => (
                      <div class="blockdesign">
                        <p
                          key={variant.id} id = {variant}
                          class={`variant ${
                            myAnswer === variant
                              ? myAnswer === quizData[currentQuestion].answer
                                ? "correctAnswer"
                                : "incorrectAnswer"
                              : null
                          }`}
                          onClick={(e) => checkAnswer(e.target.id,variant,quizData[currentQuestion].variants)}
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
                        Correct Answer: {quizData[currentQuestion].answer}
                      </p>
                    )}
          
                    {currentQuestion < quizData.length -1 && (
                      <button
                        class="nextButton"
                        onClick={() => {buttonClickFunction(quizData[currentQuestion].variants)}}
                      >
                        NEXT
                      </button>
                    )}
          
                    {currentQuestion === quizData.length-1  && (
                      <button
                        class="finishButton"
                        onClick={() => finishHandler()}
                      >
                        FINISH
                      </button>
                    )}
                    </div>
                  </div>
                )
        }
        if (finish) {
          return (
            <div class="resultDiv">
                <h3 class="resultText">
                  Thanks for taking the quiz!!!
                  It was fun right?
                </h3>
                <h3 class ="resultText">
                    Click on the button below to get back to the catergories page.
                </h3>
                <h4 class = "resultText">
                    Your score: <span class = "scoreTextColor">{score}/{quizData.length}</span>
                </h4>
                <button
                  class= "nextButton"
                  onClick={() => startOver()}
                >
                  Go Back
                </button>
              
            </div>
          );
        } else {
                return (<div>
                    {mainfunc()}
                </div>)
        }
      
    }
}

export default Quiz;