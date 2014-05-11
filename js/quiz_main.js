$(document).ready(function() {
  // Initialize some questions and add them to an array
  var allQuestions = [
  new MultipleChoiceQuestion(
    "Who is Prime Minister of England?",
    ["Obama", "Blair", "Brown", "Cameron"],
    3),

  new MultipleChoiceQuestion(
    "What is the Capital of Brazil?",
    ["São Paulo", "Rio de Janeiro", "Brasília"],
    2),

  new DragDropQuestion(
    "Drag the correct City to the world map.",
    ["Washington, DC", "Rio de Janeiro", "Stockholm"],
    0)
  ];

  // Display all the questions
  allQuestions.forEach(function (eachQuestion)  {
      eachQuestion.displayQuestion();
  });

  // The drag and drop question will only display the question
});
