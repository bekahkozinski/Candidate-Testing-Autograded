const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " "
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = " "


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ")
}

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswers = input.question(questions)
// }
function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i])
  }
}
//   TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (correctAnswer === candidateAnswer) {
//   console.log("Correct!");
// } else {
//   console.log("Incorrect, please try again");
//TODO 3.2 use this variable to calculate the candidates score.
function gradeQuiz(candidateAnswers) {
  let grade;
  let numberCorrect = 0;
  let didPass;
  for (let i = 0; i < questions.length; i++) {
    console.log(`${[i+1]}) ${questions[i]} \nYour Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]}\n`);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberCorrect = numberCorrect + 1
    }
  grade = (numberCorrect / questions.length) * 100;
  }
  if (grade >= 80) {
    didPass = "Status: PASSED"
  } else {
    didPass = "Status: FAILED"
  }
  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${questions.length} responses correct) <<<\n>>> ${didPass} <<<`);
  return grade;
}
//TODO 3.2 use this variable to calculate the candidates score.


  function runProgram() {
    askForName();
    // TODO 1.1c: Greet candidate using their name //
     console.log();
     console.log("Candidate Name: " + candidateName);
    askQuestion();
    gradeQuiz(this.candidateAnswers);
  }
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};