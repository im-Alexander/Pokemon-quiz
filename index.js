// The correct answers
var correctAnswers = ["C", "B", "D", "A", "A", "B", "C", "D", "D", "A", "A", "B", "B", "B", "A", "C", "C", "A", "D", "C"];
var bonusAnswer = 4294967296;

// Players Answers
var playerAnswers = [];
var playerBonus = 0;
var questionNumber = 1;

// When the submit button is clicked
$(".submitButton").click(function () {
    // gets user answer
    var userAnswer = $('input[name="answer"]:checked').val();
    console.log(userAnswer);

    // if an option is selected
    if (userAnswer != undefined) {
        // go to the next question
        questionNumber++;
        // saves the players answer
        playerAnswers.push(userAnswer);

        if (questionNumber === 21) {
            $(".questionNumber").html("Bonus Question!");
            // unselect the checkbox
            $('input[name="answer"]').prop('checked', false);
        } else {
            // update question title
            $(".questionNumber").html("Question #" + questionNumber);
            // unselect the checkbox
            $('input[name="answer"]').prop('checked', false);
        }
    }
});