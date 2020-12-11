import './App.css';
import React from 'react';
import Question from './Question';
import { questionJson } from './questions';
import { QuizQuestion } from './util/types';

function App() {
  const questions: QuizQuestion[] = JSON.parse(questionJson);
  return (
    <div>
      <div>Select all correct answers and click submit</div>
      {questions.map((question) => {
        return <Question key={question.text} question={question} />;
      })}
    </div>
  );
}

export default App;
