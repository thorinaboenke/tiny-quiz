export type Answer = {
  text: string;
  correct: boolean;
  checked: boolean;
  id: number;
};

export type QuizQuestion = {
  image: string;
  text: string;
  answers: Answer[];
};
