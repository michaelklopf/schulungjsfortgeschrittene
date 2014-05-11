// ---------------------
// Constructor/Prototype Pattern
// ---------------------
function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

// Create a User
firstUser = new User("Richard", "Richard@examnple.com");
firstUser.changeEmail("RichardB@example.com");
firstUser.saveScore(15);
firstUser.saveScore(10);

console.log(firstUser.showNameAndScores()); //Richard Scores: 15,10

// Create another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
console.log(secondUser.showNameAndScores()); //Peter Scores: 18

// ---------------------
// Parasitic Combination Inheritance
// ---------------------
// Helper method to create inheritance
function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);  //ECMA5 compatible
    copyOfParent.constructor = childObject;
    childObject.prototype = copyOfParent;
}

// The question constructor
function Question(theQuestion, theChoices, theCorrectAnswer) {
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";

    var newDate = new Date(),
    QUIZ_CREATED_DATE = newDate.toLocaleDateString();

    this.getQuizDate = function () {
        return QUIZ_CREATED_DATE;
    };

    console.log("Quiz Created On: " + this.getQuizDate());
}

// These methods will be inherited
Question.prototype.getCorrectAnswer = function () {
    return  this.correctAnswer;
};

Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};

Question.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
        choiceCounter = 0;

    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += "</ul>";

    console.log (questionToDisplay);
    $("#content").append(questionToDisplay);
};

// ---------------------
// Sub class of question
// ---------------------
function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};

inheritPrototype(MultipleChoiceQuestion, Question);

// Another sub class of question
function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}
// inherit the methods and properties from Question
inheritPrototype(DragDropQuestion, Question);

// ---------------------
// Override the displayQuestion method
// ---------------------
DragDropQuestion.prototype.displayQuestion = function () {
    // Implementation is todo
    var questionToDisplay = "Overwriting display question. Question is: <br>"
      + this.question;
    console.log(questionToDisplay);
    $("#content").append(questionToDisplay);
};

// look for quiz_main.js to see how these classes are used
