export enum Answer {
  RED = "Red",
  BLUE = "Blue",
  GREEN = "Green",
  YELLOW = "Yellow",
}

export type QuizQuestion = {
  question: string;
  options: {
    text: string;
    value: Answer;
  }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "You're planning a weekend trip. How do you approach it?",
    options: [
      {
        text: "I make a detailed itinerary with backup plans.",
        value: Answer.BLUE,
      },
      {
        text: "I go with the flow and decide things on the spot.",
        value: Answer.YELLOW,
      },
      {
        text: "I choose a destination and key activities but keep it flexible.",
        value: Answer.GREEN,
      },
      {
        text: "I book everything in advance to maximize efficiency.",
        value: Answer.RED,
      },
    ],
  },
  {
    question: "A friend is going through a tough time. How do you respond?",
    options: [
      { text: "I listen and offer emotional support.", value: Answer.GREEN },
      {
        text: "I give them practical advice on how to fix the situation.",
        value: Answer.RED,
      },
      {
        text: "I try to lighten the mood and distract them.",
        value: Answer.YELLOW,
      },
      {
        text: "I analyze the problem and suggest logical solutions.",
        value: Answer.BLUE,
      },
    ],
  },
  {
    question: "At a social event, what role do you naturally take?",
    options: [
      {
        text: "I enjoy meeting new people and being the center of attention.",
        value: Answer.YELLOW,
      },
      {
        text: "I stick to a few close friends and have meaningful conversations.",
        value: Answer.GREEN,
      },
      { text: "I observe the group before joining in.", value: Answer.BLUE },
      {
        text: "I take charge and organize activities or discussions.",
        value: Answer.RED,
      },
    ],
  },
  {
    question: "You're assembling furniture. What's your approach?",
    options: [
      {
        text: "I read the manual carefully before starting.",
        value: Answer.BLUE,
      },
      {
        text: "I skim the manual and figure it out as I go.",
        value: Answer.RED,
      },
      {
        text: "I ask someone to help me and make it a group activity.",
        value: Answer.GREEN,
      },
      {
        text: "I start assembling based on intuition and fix mistakes later.",
        value: Answer.YELLOW,
      },
    ],
  },
  {
    question: "How do you usually make big life decisions?",
    options: [
      {
        text: "I rely on logic and research to choose the best option.",
        value: Answer.BLUE,
      },
      {
        text: "I trust my instincts and go with what feels right.",
        value: Answer.YELLOW,
      },
      {
        text: "I consider how it will affect my relationships and loved ones.",
        value: Answer.GREEN,
      },
      {
        text: "I make a firm decision and take action quickly.",
        value: Answer.RED,
      },
    ],
  },
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

export const colorsText: Record<string, { text: string; bg: string }> = {
  red: { text: "text-red-500", bg: "bg-red-50" },
  blue: { text: "text-blue-500", bg: "bg-blue-50" },
  yellow: { text: "text-yellow-500", bg: "bg-yellow-50" },
  green: { text: "text-green-500", bg: "bg-green-50" },
};
