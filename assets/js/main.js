let quizQuestions = [
  {
    question: " What is the fullform of HTML",
    a: "Hyper Type Markup Language",
    b: "Hyper Text Makeup Language",
    c: "Hyper Text Markup Language",
    d: "Hype Texture Markup Language",
    correct: "ans3",
  },
  {
    question: " What is the fullform of CSS",
    a: "Cascading Style Sheet",
    b: "Cascade Style Sheet",
    c: "Control Style Sheet",
    d: "Cyber Style Sheet",
    correct: "ans1",
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Brisbane",
    correct: "ans3",
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "ans2",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    a: "William Shakespeare",
    b: "Jane Austen",
    c: "Charles Dickens",
    d: "Mark Twain",
    correct: "ans1",
  },
  {
    question: " What is the chemical symbol for gold?",

    a: "Au",
    b: "Ag",
    c: "Fe",
    d: "Hg",
    correct: "ans1",
  },
  {
    question: "In what year did the Titanic sink?",

    a: " 1912",
    b: "1905",
    c: " 1923",
    d: " 1931",
    correct: "ans1",
  },
  {
    question: "Which element is the most abundant in the Earth's crust?",

    a: "Oxygen",
    b: "Silicon",
    c: "Aluminum",
    d: " Iron",
    correct: "ans1",
  },
  {
    question: "What is the largest mammal in the world?",

    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Polar Bear",
    correct: "ans2",
  },
  {
    question: `Who is known as the "Father of Computer Science"?`,

    a: "Alan Turing",
    b: "Bill Gates",
    c: "Steve Jobs",
    d: "Charles Babbage",
    correct: "ans4",
  },
  {
    question: "What is the currency of Japan?",
    a: "Won",
    b: "Yen",
    c: "Ringgit",
    d: "Baht,",
    correct: "ans2",
  },
  {
    question: "Which gas do plants primarily absorb for photosynthesis?",

    a: "Oxygen",
    b: "Nitrogen",
    c: "Carbon Dioxide",
    d: "Hydrogen",
    correct: "ans3",
  },
];
// console.log(quizQuestions[0]);

const questions = document.getElementById("questions");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.getElementById("showScore");
let index = 0;
let score = 0;
let mistake = 0;
const loadQuestion = () => {
  let questionList = quizQuestions[index];
  questions.textContent = `Q${index + 1}. ` + questionList.question;
  option1.textContent = questionList.a;
  option2.textContent = questionList.b;
  option3.textContent = questionList.c;
  option4.textContent = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((items) => {
    if (items.checked) {
      answer = items.id;
    }
  });
  return answer;
};
const deSelectAll = () => {
  answers.forEach((items) => {
    items.checked = false;
  });
};
const mistakeAnswer = () => {
  return quizQuestions.length - score;
};
submit.addEventListener("click", () => {
  let checked = false;
  answers.forEach((item) => {
    if (item.checked) {
      checked = true;
    }
  });
  if (!checked) {
    alert("You must select at least 1 option");
  } else {
    let checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizQuestions[index].correct) {
      score++;
    }
    index++;
    deSelectAll();
    if (index < quizQuestions.length) {
      loadQuestion();
    } else {
      showScore.innerHTML = `
    <h3>You scored ${score} out of ${quizQuestions.length} ✌</h3>
    <h4 class="mistake">Your mistakes are ${mistakeAnswer()} out of ${
        quizQuestions.length
      } </h4>
    <button class="btn" onClick="location.reload()">Play Again</button>`;
      showScore.style.display = "flex";
      submit.disabled = true;
      // showScore.classList.add("btn");
    }
  }
});
