import { memo } from "react";
import { Quiz } from "../Quiz";
import { generateQuiz } from "../modules/overall";
import { shuffle } from "../modules/utils";

const Header: React.FC<{
  number: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ number, setIsModalOpen }) => (
  <button
    className="pr-6 text-2xl"
    onClick={() => {
      setIsModalOpen(true);
    }}
  >
    <span className="text-gray-800">[{number}</span>
    <span> Quiz]</span>
  </button>
);

export const QuizSection: React.FC<{
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = memo(({ setIsModalOpen }) => {
  const quiz = shuffle(generateQuiz());
  return (
    <>
      <Header number={quiz.length} setIsModalOpen={setIsModalOpen} />

      {quiz.map((q, i) => (
        <Quiz numbers={[q[0], q[2]]} symbol={q[1]} key={i} />
      ))}
    </>
  );
});
