import React from "react";
import { Quiz } from "./Quiz";
import { generateQuiz } from "./modules/overall";
import { shuffle } from "./modules/utils";

const Header: React.FC<{ number: number }> = ({ number }) => (
  <div className="pr-6 text-2xl">
    <span className="text-gray-800">[{number}</span>
    <span> Quiz]</span>
  </div>
);

function App() {
  const quiz = shuffle(generateQuiz());

  return (
    <>
      <div
        className="flex flex-wrap items-center justify-center"
        style={{ lineHeight: 2.3 }}
      >
        <Header number={quiz.length} />
        {quiz.map((q, i) => (
          <Quiz numbers={[q[0], q[2]]} symbol={q[1]} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
