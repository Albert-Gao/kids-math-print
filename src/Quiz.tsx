import React from "react";

const Number: React.FC<{ number: number }> = ({ number }) => (
  <span className="text-3xl">{number}</span>
);

const Symbol: React.FC<{ text: string }> = ({ text }) => (
  <span className="text-2xl font-semibold text-gray-900">{text}</span>
);

const Result: React.FC = () => (
  <span
    className="text-2xl font-semibold text-gray-900"
    style={{ visibility: "hidden" }}
  >
    {0}
  </span>
);

export const Quiz: React.FC<{ numbers: number[] }> = ({ numbers }) => {
  const [num1, num2] = numbers;

  return (
    <div
      className="flex items-center"
      style={{ letterSpacing: "5px", minWidth: "12em", maxWidth: "12em" }}
    >
      <Number number={num1} />
      <Symbol text="+" />
      <Number number={num2} />
      <Symbol text="=" />
      <Result />
    </div>
  );
};
