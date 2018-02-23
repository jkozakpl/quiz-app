// Create questions
var questions = [
    new Question("Who is the best?", ["Jerzy Kozak", "Master of The World"], "Jerzy Kozak"),
    new Question("What color is the grass?", ["green", "blue"], "green")
];

// Create Quiz
var quiz = new Quiz(questions);

// Display Quiz
QuizUI.displayNext();