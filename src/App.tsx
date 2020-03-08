import React from "react";
import { Quiz } from "./Quiz";
import { generateQuizs } from "./utils";

function App() {
  const quiz = generateQuizs();

  return (
    <div>
      <div className="pl-10 text-2xl">
        <span className="text-gray-800">{quiz.length}</span>
        <span> Quiz</span>
      </div>
      <div
        className="flex flex-wrap items-center justify-center"
        style={{ lineHeight: 2 }}
      >
        {quiz.map((q, i) => (
          <Quiz numbers={q} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
