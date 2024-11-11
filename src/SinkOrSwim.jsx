import { useState } from "react";

export default function SinkOrSwim() {
  const choices = ["Sink", "Swim"];
  const randomChoice = () => Math.floor(Math.random() * choices.length);
  const [choice, setChoice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setChoice("");
    setTimeout(() => {
      setChoice(choices[randomChoice()]);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <h1>Today we..</h1>
      <h2>
        {choice}
        {isLoading && (
          <span className="dotOne" style={{ opacity: isLoading ? 1 : 0 }}>
            .
          </span>
        )}
        {isLoading && (
          <span className="dotTwo" style={{ opacity: isLoading ? 1 : 0 }}>
            .
          </span>
        )}
        {isLoading && (
          <span className="dotThree" style={{ opacity: isLoading ? 1 : 0 }}>
            .
          </span>
        )}
      </h2>
      <button onClick={handleClick}>Sink or Swim?</button>
    </>
  );
}
