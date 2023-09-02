export const courses = [
  {
    id: 1,
    title: "HTML",
    course_desc:
      "This HTML quiz is completely for beginners. This contains 10 multiple choice questions.",
    course_link: "/html-quiz",
  },
  {
    id: 2,
    title: "CSS",
    course_desc:
      "This CSS quiz is completely for beginners. This contains 10 multiple choice questions.",
    course_link: "/css-quiz",
  },
  {
    id: 3,
    title: "JavaScript",
    course_desc:
      "This JavaScript quiz is completely for beginners. This contains 10 multiple choice questions.",
    course_link: "/javascript-quiz",
  },
  {
    id: 4,
    title: "React JS",
    course_desc:
      "This React quiz is completely for beginners. This contains 10 multiple choice questions.",
    course_link: "/reactjs-quiz",
  },
];

export const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup",
    ],
    right_answer: 2,
  },
  {
    id: 2,
    question: "Who is making the Web standards?",
    options: [
      "The World Wide Web Consortium",
      "Google",
      "Microsoft",
      "Mozilla",
    ],
    right_answer: 1,
  },
  {
    id: 3,
    question: "Choose the correct HTML element for the largest heading:",
    options: ["<h6>", "<h1>", "<heading>", "head"],
    right_answer: 2,
  },
  {
    id: 4,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<br>"],
    right_answer: 3,
  },
  {
    id: 5,
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<background>yellow</background>",
      "<body bg='yellow'>",
      "<body style='background-color:yellow;'>",
    ],
    right_answer: 3,
  },
  {
    id: 6,
    question: "Choose the correct HTML element to define important text",
    options: ["<strong>", "<i>", "<important>", "<b>"],
    right_answer: 1,
  },
  {
    id: 7,
    question: "Choose the correct HTML element to define emphasized text",
    options: ["<italic>", "<i>", "<em>"],
    right_answer: 3,
  },
  {
    id: 8,
    question: "How can you open a link in a new tab/browser window?",
    options: [
      "<a href='url' new>",
      "<a href='url' target='new'>",
      "<a href='url' target='_blank'>",
    ],
    right_answer: 3,
  },
  {
    id: 9,
    question:
      "Inline elements are normally displayed without starting a new line.",
    options: ["true", "false"],
    right_answer: 1,
  },
  {
    id: 10,
    question: "How can you make a numbered list?",
    options: ["<dl>", "<ol>", "<ul>", "<list>"],
    right_answer: 2,
  },
];

export const CSSQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheet",
      "Creative Style System",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "Which CSS property is used to control the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: "font-size",
  },
  {
    question: "How can you include CSS in an HTML document?",
    options: [
      "<style></style>",
      "<link rel='stylesheet'>",
      "<css></css>",
      "<script src='style.js'></script>",
    ],
    answer: "<link rel='stylesheet'>",
  },
  {
    question:
      "Which CSS selector is used to select elements with a specific class?",
    options: [".class", "#id", "element", "tag"],
    answer: ".class",
  },
  {
    question: "What does the 'Cascading' in CSS refer to?",
    options: [
      "The hierarchy of styles",
      "Waterfall effect",
      "Falling styles",
      "Styling water elements",
    ],
    answer: "The hierarchy of styles",
  },
  {
    question: "Which CSS property is used to change the color of text?",
    options: ["color", "text-color", "font-color", "text-style"],
    answer: "color",
  },
  {
    question: "What is the purpose of the CSS 'float' property?",
    options: [
      "To move an element to the left or right",
      "To make text bold",
      "To change text alignment",
      "To create animations",
    ],
    answer: "To move an element to the left or right",
  },
  {
    question: "Which CSS value is used for making an element transparent?",
    options: ["transparent", "visible", "opaque", "hidden"],
    answer: "transparent",
  },
  {
    question:
      "Which CSS property is used for adding space inside an element's border?",
    options: ["padding", "margin", "border-spacing", "spacing"],
    answer: "padding",
  },
  {
    question: "What is the CSS 'box-model'?",
    options: [
      "A way to describe element dimensions",
      "A type of CSS animation",
      "A web design framework",
      "A CSS preprocessor",
    ],
    answer: "A way to describe element dimensions",
  },
];

export const JSQuestions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Mode",
      "Document Orientation Model",
      "Digital Object Model",
    ],
    right_answer: 1,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "int", "declare"],
    right_answer: 1,
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    right_answer: 2,
  },
  {
    question:
      "Which built-in method removes the last element from an array and returns it?",
    options: ["pop()", "last()", "remove()", "shift()"],
    right_answer: 1,
  },
  {
    question: "What does 'NaN' stand for?",
    options: ["Not a Name", "New and Nice", "Not a Number", "No Action Needed"],
    right_answer: 3,
  },
  {
    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "=", "!="],
    right_answer: 2,
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A type of loop",
      "A function with no parameters",
      "A function with nested functions",
      "An event listener",
    ],
    right_answer: 3,
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    options: ["boolean", "string", "integer", "object"],
    right_answer: 3,
  },
  {
    question: "How can you comment out a single line in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "' This is a comment",
    ],
    right_answer: 1,
  },
  {
    question: "What does 'JSON' stand for in JavaScript?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Object Network",
      "Java Source Object Notation",
      "JavaScript Oriented Node",
    ],
    right_answer: 1,
  },
];

export const ReactQuestions = [
  {
    question: "What is React JS primarily used for?",
    options: [
      "Building databases",
      "Creating server-side applications",
      "Developing user interfaces",
      "Running automation scripts",
    ],
    right_answer: 2,
  },
  {
    question: "Which of the following is a core concept of React?",
    options: [
      "DOM manipulation",
      "Database design",
      "Network protocols",
      "Hardware programming",
    ],
    right_answer: 0,
  },
  {
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript eXtended",
      "Java Syntax XML",
    ],
    right_answer: 0,
  },
  {
    question: "In React, what is a 'state' used for?",
    options: [
      "Styling components",
      "Managing data that can change over time",
      "Defining the layout of a component",
      "Creating functional components",
    ],
    right_answer: 1,
  },
  {
    question:
      "Which React hook is used to perform side effects in a functional component?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    right_answer: 1,
  },
  {
    question: "What is the purpose of the virtual DOM in React?",
    options: [
      "To manage server requests",
      "To improve security",
      "To optimize performance by reducing DOM manipulation",
      "To handle authentication",
    ],
    right_answer: 2,
  },
  {
    question:
      "What is the main advantage of using React Router for routing in React applications?",
    options: [
      "It simplifies component rendering",
      "It allows server-side rendering",
      "It provides a built-in API for state management",
      "It enables client-side navigation without full page reloads",
    ],
    right_answer: 3,
  },
  {
    question: "What is the purpose of the 'props' object in React components?",
    options: [
      "To declare component methods",
      "To manage component state",
      "To pass data from parent to child components",
      "To style components",
    ],
    right_answer: 2,
  },
  {
    question:
      "Which package manager can be used to manage dependencies in a React project?",
    options: ["npm", "Git", "Python pip", "Ruby Gems"],
    right_answer: 0,
  },
  {
    question: "What is Redux commonly used for in React applications?",
    options: [
      "Server-side rendering",
      "Handling component layout",
      "Managing global state",
      "Authentication",
    ],
    right_answer: 2,
  },
];
