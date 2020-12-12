import React from 'react';
import Question from './Question';
import { questionJson } from './questions';
import { QuizQuestion } from './util/types';

function App() {
  const questions: QuizQuestion[] = JSON.parse(questionJson);

  return (
    <div className="main">
      <div>
        <div className="heading">
          Select all correct answers and click Submit Answer
        </div>
        {questions.map((question) => {
          return <Question key={question.text} question={question} />;
        })}
      </div>
    </div>
  );
}

export default App;
