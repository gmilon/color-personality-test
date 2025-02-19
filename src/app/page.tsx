"use client";
import { useEffect, useState } from "react";
import type { Property } from "csstype";

enum Answer {
  RED = "Red",
  BLUE = "Blue",
  GREEN = "Green",
  YELLOW = "Yellow",
}

type QuizQuestion = {
  question: string;
  options: {
    text: string;
    value: Answer;
  }[];
};

const quizQuestions: QuizQuestion[] = [
  {
    question:
      "A critical bug has been reported on the website during a sale event. What’s your first instinct?",
    options: [
      {
        text: "Take charge and quickly coordinate efforts to address the issue efficiently.",
        value: Answer.RED,
      },
      {
        text: "Analyze logs, gather details, and ensure the issue is well understood before acting",
        value: Answer.BLUE,
      },
      {
        text: "Communicate with the team to keep everyone aligned and reduce stress",
        value: Answer.GREEN,
      },
      {
        text: "Look for creative workarounds or temporary solutions to keep things running",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "The PM introduces a last-minute feature request just before a sprint ends. You…",
    options: [
      {
        text: "Request clarification on the business need and discuss its feasibility within the current sprint.",
        value: Answer.RED,
      },
      {
        text: "Check the backlog, prioritize impact, and determine if it’s feasible within the sprint",
        value: Answer.BLUE,
      },
      {
        text: "Discuss with the team to see how it affects workload and morale",
        value: Answer.GREEN,
      },
      {
        text: "Suggest a quick MVP solution that might satisfy both the PO and developers",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "During a sprint planning meeting, you notice the team is struggling to estimate a complex task. You…",
    options: [
      {
        text: "Drive the conversation towards a decision while ensuring we’re still considering technical feasibility.",
        value: Answer.RED,
      },
      {
        text: "Break the task down further and analyze the technical complexity",
        value: Answer.BLUE,
      },
      {
        text: "Ensure everyone’s concerns are heard and try to find a consensus",
        value: Answer.GREEN,
      },
      {
        text: "Suggest a fun way to estimate, like Planning Poker, to make it more engaging",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "A developer is struggling with a tricky piece of code. What do you do?",
    options: [
      {
        text: "Push for efficiency but support them in overcoming obstacles quickly.",
        value: Answer.RED,
      },
      {
        text: "Provide structured guidance and resources to help them understand",
        value: Answer.BLUE,
      },
      {
        text: "Sit down with them and walk through the problem together",
        value: Answer.GREEN,
      },
      {
        text: "Share a personal story of when you struggled with something similar",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "The team is debating which JavaScript framework to use for a new feature. You…",
    options: [
      {
        text: "Push for a decision focusing on a balance of speed, performance, and long-term goals.",
        value: Answer.RED,
      },
      {
        text: "Analyze pros and cons, looking at performance and long-term scalability",
        value: Answer.BLUE,
      },
      {
        text: "Encourage discussion and make sure all voices are heard",
        value: Answer.GREEN,
      },
      {
        text: "Suggest testing a prototype with both options before deciding",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "A stakeholder keeps requesting frequent updates on the project’s progress. You…",
    options: [
      {
        text: "Provide concise updates that keep them informed while prioritizing time for core tasks.",
        value: Answer.RED,
      },
      {
        text: "Prepare a detailed progress report with metrics and milestones",
        value: Answer.BLUE,
      },
      {
        text: "Check how they prefer updates and tailor communication accordingly",
        value: Answer.GREEN,
      },
      {
        text: "Add a bit of humor or a fun update format to keep things interesting",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "A PR has been sitting unreviewed for a while, slowing progress. You…",
    options: [
      {
        text: "Prompt the team to review it while respecting their time constraints.",
        value: Answer.RED,
      },
      {
        text: "Carefully review it yourself and add detailed feedback",
        value: Answer.BLUE,
      },
      {
        text: "Check in with the author and reviewers to understand the delay",
        value: Answer.GREEN,
      },
      {
        text: "Suggest a team-wide code review session to clear backlog together",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question: "Your team has a new intern who asks a lot of questions. You…",
    options: [
      {
        text: "Encourage independence while providing guidance when necessary.",
        value: Answer.RED,
      },
      {
        text: "Point them to the best documentation and structured learning resources",
        value: Answer.BLUE,
      },
      {
        text: "Take time to mentor them and make them feel welcome",
        value: Answer.GREEN,
      },
      {
        text: "Make learning fun by pairing them with different team members",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "Your sprint is halfway through, and it’s clear the team won’t finish everything. You…",
    options: [
      {
        text: "Motivate the team to focus on key priorities to ensure progress.",
        value: Answer.RED,
      },
      {
        text: "Reprioritize tasks based on impact and feasibility",
        value: Answer.BLUE,
      },
      {
        text: "Check in with the team to ensure no one is overloaded",
        value: Answer.GREEN,
      },
      {
        text: "Suggest a retrospective on how to improve future sprint planning",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "A designer unexpectedly requests a UX/UI overhaul of the checkout flow. You…",
    options: [
      {
        text: "Encourage focusing on high-priority improvements that align with the launch schedule.",
        value: Answer.RED,
      },
      {
        text: "Analyze data to determine if the redesign is justified",
        value: Answer.BLUE,
      },
      {
        text: "Discuss with the team and stakeholders to find a balanced approach",
        value: Answer.GREEN,
      },
      {
        text: "Suggest A/B testing smaller changes before committing to a full redesign",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "Your team is in a daily stand-up, and one person keeps talking too long. You…",
    options: [
      {
        text: "Politely steer the conversation back to key updates to respect everyone’s time.",
        value: Answer.RED,
      },
      {
        text: "Make a note and bring up the time issue at the retrospective",
        value: Answer.BLUE,
      },
      {
        text: "Gently steer the conversation back to focus on key updates",
        value: Answer.GREEN,
      },
      {
        text: "Lighten the mood with a fun comment before moving on",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "The design team delivers a UI component that is difficult to implement. You…",
    options: [
      {
        text: "Request adjustments that help streamline development without compromising the design vision.",
        value: Answer.RED,
      },
      {
        text: "Analyze the complexity and propose alternative approaches",
        value: Answer.BLUE,
      },
      {
        text: "Work with the designers to find a compromise",
        value: Answer.GREEN,
      },
      {
        text: "Suggest small tweaks that maintain creativity but reduce complexity",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "A major production deployment fails, and the team needs to fix it ASAP. You…",
    options: [
      {
        text: "Lead the team in tackling the issue efficiently, ensuring clear roles and communication.",
        value: Answer.RED,
      },
      {
        text: "Start debugging systematically to find the root cause",
        value: Answer.BLUE,
      },
      {
        text: "Ensure clear communication so everyone knows what’s happening",
        value: Answer.GREEN,
      },
      {
        text: "Try to keep morale up with humor while tackling the issue",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question: "The team has been working hard and is feeling burned out. You…",
    options: [
      {
        text: "Encourage results while being mindful of the team’s well-being and celebrating achievements.",
        value: Answer.RED,
      },
      {
        text: "Suggest better time management and process improvements",
        value: Answer.BLUE,
      },
      {
        text: "Advocate for a break or team bonding activity",
        value: Answer.GREEN,
      },
      {
        text: "Plan something fun like a game or casual team chat",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question:
      "In a retrospective, the team struggles to provide feedback openly. You…",
    options: [
      {
        text: "Encourage constructive, honest feedback in a respectful and open environment.",
        value: Answer.RED,
      },
      {
        text: "Suggest a structured way to give feedback, like Start/Stop/Continue",
        value: Answer.BLUE,
      },
      {
        text: "Create a safe space where everyone feels comfortable sharing",
        value: Answer.GREEN,
      },
      {
        text: "Introduce a fun or creative format to make feedback easier",
        value: Answer.YELLOW,
      },
    ],
  },
];

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
