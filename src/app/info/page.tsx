import React from "react";
import { colorsText } from "@/data/questions";

const CommunicationGuide = () => {
  const colors = [
    {
      color: "Red",
      description: "Action-Oriented, Direct, Results-Driven",
      communicate: [
        "Be clear, concise, and straight to the point.",
        "Focus on results, efficiency, and action.",
        "Avoid too much small talk—stick to objectives.",
        "Respect their time and get to the point quickly.",
      ],
      adjust: [
        "Be patient with Greens who need emotional connection.",
        "Give Blues time to process and analyze.",
        "Let Yellows express ideas without shutting them down too fast.",
      ],
      examples: [
        {
          work: "Red to Blue: 'I need a report on customer behavior. Just give me the key insights.'",
          life: "Red to Yellow: 'Let’s plan our trip. We need to book flights now.'",
        },
      ],
    },
    {
      color: "Blue",
      description: "Logical, Analytical, Detail-Oriented",
      communicate: [
        "Provide clear data and reasoning behind decisions.",
        "Give them time to think before making big decisions.",
        "Be structured and methodical in conversations.",
      ],
      adjust: [
        "Be more flexible when dealing with Yellows, who thrive on spontaneity.",
        "Understand that Reds need quick decisions and won’t always want a deep analysis.",
        "Be more personal with Greens, who value emotions over logic.",
      ],
      examples: [
        {
          work: "Blue to Red: 'I’ve analyzed the data, and here are three possible strategies.'",
          life: "Blue to Green: 'I checked all the restaurant reviews, and this one has the best rating.'",
        },
      ],
    },
    {
      color: "Green",
      description: "Empathetic, Supportive, Team-Oriented",
      communicate: [
        "Show appreciation and empathy before discussing tasks.",
        "Avoid aggressive or overly direct communication.",
        "Make sure they feel heard in discussions.",
      ],
      adjust: [
        "Be more direct when talking to Reds, who prefer efficiency.",
        "Use logic when talking to Blues, who need data over emotions.",
        "Let Yellows have their creative space instead of always prioritizing harmony.",
      ],
      examples: [
        {
          work: "Green to Red: 'I know you want this done fast, but we should check in with the team first.'",
          life: "Green to Yellow: 'That sounds fun! Let’s make sure everyone’s comfortable with it.'",
        },
      ],
    },
    {
      color: "Yellow",
      description: "Creative, Spontaneous, Social",
      communicate: [
        "Keep things engaging, fun, and energetic.",
        "Don’t be too rigid—give them space for creativity.",
        "Use positive reinforcement instead of criticism.",
      ],
      adjust: [
        "Stay on topic with Blues, who dislike distractions.",
        "Respect deadlines with Reds, who prioritize results over fun.",
        "Be mindful of Greens, who need emotional stability.",
      ],
      examples: [
        {
          work: "Yellow to Red: 'Let’s brainstorm some ideas before deciding.'",
          life: "Yellow to Green: 'Let’s go on an adventure!'",
        },
      ],
    },
  ];

  return (
    <div className="md:p-8 p-4 space-y-8 container mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Communication Guide by Personality Color
      </h1>
      <div className="grid lg:grid-cols-2 gap-6">
        {colors.map((c) => (
          <div
            key={c.color}
            className={`card ${colorsText[c.color.toLowerCase()].bg} shadow-xl p-6 border`}
          >
            <h2
              className={`text-2xl font-bold ${colorsText[c.color.toLowerCase()].text}`}
            >
              {c.color}
            </h2>
            <p className="italic">{c.description}</p>
            <h3 className="font-semibold mt-4">How to Communicate:</h3>
            <ul className="list-disc list-inside">
              {c.communicate.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4">How to Adjust:</h3>
            <ul className="list-disc list-inside">
              {c.adjust.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4">Examples:</h3>
            {c.examples.map((example, index) => (
              <div key={index}>
                <p>
                  <strong>Work:</strong> {example.work}
                </p>
                <p>
                  <strong>Life:</strong> {example.life}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationGuide;
