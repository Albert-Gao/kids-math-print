const Number: React.FC<{ number: number }> = ({ number }) => (
  <span className="text-2xl">{number}</span>
);

const Symbol: React.FC<{ text: string }> = ({ text }) => (
  <span className="text-2xl font-semibold text-gray-900">{text}</span>
);

const Result: React.FC = () => (
  <span
    className="font-semibold text-gray-900 text-1xl"
    style={{ visibility: "hidden" }}
  >
    {0}
  </span>
);

export const Quiz: React.FC<{ numbers: number[]; symbol: string }> = ({
  numbers,
  symbol,
}) => {
  const [num1, num2] = numbers;

  return (
    <div
      className="flex items-center"
      style={{
        // letterSpacing: ".3px",
        minWidth: "10em",
        maxWidth: "10em",
        marginTop: "15px",
      }}
    >
      <Number number={num1} />
      <Symbol text={symbol} />
      <Number number={num2} />
      <Symbol text="=" />
      <Result />
    </div>
  );
};
