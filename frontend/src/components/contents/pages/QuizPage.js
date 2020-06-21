import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const QuizPage = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    const quiz = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy"
      );
      if (response.status === 200) {
        const json = await response.json();
        setQuestion(json.results[0]);
        const optionArr = json.results[0].incorrect_answers;
        optionArr.push(json.results[0].correct_answer);
        shuffleArray(optionArr);
        setOptions(optionArr);
      } else {
        console.log("failed to fetch: " + response.status);
      }
    };
    quiz();
  }, [questionNumber]);

  function handleOption(e) {
    e.preventDefault();
    if (e.target.value === question.correct_answer) {
      alert("Correct!");    
    } else {
      alert("Incorrect!");
    }
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <div>
      <div className="card-body">{JSON.stringify(question.question)}</div>
      {options.map((option) => {
        return (
          <Button
            key={option}
            value={option}
            className="mr-2"
            onClick={handleOption}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default QuizPage;
