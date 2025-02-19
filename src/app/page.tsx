"use client";
import { useEffect, useState } from "react";
import type { Property } from "csstype";
import { quizQuestions, Answer } from "@/data/questions";

function shuffleArray<T extends Record<string, unknown>[]>(array: T) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const Home = () => {
  const [answers, setAnswers] = useState<(Answer | null)[]>(
    Array(quizQuestions.length).fill(null),
  );
  const [showResult, setShowResult] = useState(false);
  const [dominantColor, setDominantColor] = useState<Answer | null>(null);

  const [shuffledQuestions, setShuffledQuestions] = useState(quizQuestions);

  useEffect(() => {
    // Shuffle options only on the client side
    const shuffled = quizQuestions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerChange = (questionIndex: number, answer: Answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const colorCount = {
      [Answer.RED]: 0,
      [Answer.BLUE]: 0,
      [Answer.GREEN]: 0,
      [Answer.YELLOW]: 0,
    };

    answers.forEach((answer) => {
      if (answer) {
        colorCount[answer]++;
      }
    });

    const dominant = Object.keys(colorCount).reduce((a, b) =>
      colorCount[a as Answer] > colorCount[b as Answer] ? a : b,
    );

    setDominantColor(dominant as Answer);
    setShowResult(true);
  };

  return (
    <div className={"container max-w-screen-md mx-auto py-8"}>
      <h1 className={"text-2xl font-bold mb-4 uppercase text-center"}>
        Value of Values
      </h1>

      <div className={"alert mx-3 my-8"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          There is no right or wrong answer. The goal is to find the one that is
          most valuable to you.
        </span>
      </div>

      {!showResult ? (
        <form>
          {shuffledQuestions.map((q, index) => (
            <div
              key={index}
              className={"card card-sm bg-base-100 border shadow-lg mb-4 mx-3"}
            >
              <div className="card-body">
                <h3 className={"card-title mb-2"}>
                  {index + 1}. {q.question}
                </h3>
                <div className={"card-actions flex flex-col"}>
                  {q.options.map((option, i) => (
                    <div key={i} className={"mb-2"}>
                      <label className={"flex gap-3"}>
                        <input
                          type="radio"
                          name={`question${index}`}
                          value={option.value}
                          className={"radio"}
                          checked={answers[index] === option.value}
                          onChange={() =>
                            handleAnswerChange(index, option.value)
                          }
                        />
                        <span className={"text-wrap"}>{option.text}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className={"px-5"}>
            <button
              type="button"
              className={"btn btn-primary w-full"}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className={"mx-auto container p-8"}>
          <h2 className={"mb-4 flex gap-2 items-center"}>
            <span>Your dominant color is:</span>
            <span
              className={"text-3xl font-bold uppercase"}
              style={{ color: dominantColor as Property.Color }}
            >
              {dominantColor}
            </span>
          </h2>
          <p className={"text-lg"}>
            Please remember this result for the meeting.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
