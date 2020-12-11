import React, { useState } from 'react';
import { QuizQuestion, Answer } from './util/types';

type Props = {
  question: QuizQuestion;
};
function Question(props: Props) {
  const [answers, setAnswers] = useState(props.question.answers);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const submitAnswer = () => {
    setIsAnswered(true);
    setIsCorrect(checkAnswers(answers));
    return undefined;
  };

  function checkAnswers(ans: Answer[]) {
    for (let i = 0; i < ans.length; i++) {
      if (ans[i].checked !== ans[i].correct) {
        return false;
      }
    }

    return true;
  }
  return (
    <div className="flex-container">
      <div className="inner-flex-container">
        <img src={props.question.image} alt="example" />
        <div className="question">
          <div>{props.question.text}</div>
          <form>
            {answers.map((answer) => {
              return (
                <div key={answer.text}>
                  <input
                    type="checkbox"
                    checked={answer.checked}
                    id={answer.text}
                    name={answer.text}
                    value={answer.text}
                    onChange={(event) => {
                      const checked = event.target.checked;
                      setAnswers(
                        answers.map((a) => {
                          return a.id !== answer.id
                            ? { ...a }
                            : { ...a, checked: checked };
                        }),
                      );
                    }}
                  />
                  <label htmlFor={answer.text}>{answer.text}</label>
                </div>
              );
            })}
            <button onClick={() => submitAnswer()} disabled={isAnswered}>
              Submit Answer
            </button>
          </form>
        </div>
      </div>
      {isAnswered && isCorrect && (
        <div className="section feedback correct">Correct</div>
      )}
      {isAnswered && !isCorrect && (
        <div className="section feedback wrong">Wrong</div>
      )}
      <div className="section correct-answers">
        {isAnswered && <div>correct answers:</div>}
        {isAnswered &&
          answers.map((a) => {
            return a.correct ? <div key={a.text}>{a.text}</div> : null;
          })}
      </div>
    </div>
  );
}

export default Question;
