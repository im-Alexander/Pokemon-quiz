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

    if (questionNumber === correctAnswers.length + 1) {
        $(".password").removeClass("invisible");
        $(".bonusAnswer").addClass("invisible");
        $(".questionNumber").html("Enter the password to see your score!");
        $(".submitButton").val("Check Password!");
    }

    if ($(".password").val().toLowerCase() === "i love 3kg") {
        $(".submitButton").addClass("invisible");
        $(".password").addClass("invisible");

        var score = calculateScore();

        playerBonus = $(".bonusAnswer").val();
        bonusAnswer = calculateBonus(playerBonus);
        $(".questionNumber").html("You got " + score + "/20 correct!<br /><br />You were " + bonusAnswer + " away from the correct number!");
    }

    // if an option is selected
    if (userAnswer != undefined) {
        // go to the next question
        questionNumber++;
        // saves the players answer
        playerAnswers.push(userAnswer);

        // if we are at the bonus question
        if (questionNumber === correctAnswers.length + 1) {    // change some properties
            $(".questionNumber").html("Bonus Question!");
            $(".radioField").addClass("invisible");
            $(".bonusAnswer").removeClass("invisible");
            $(".submitButton").val("Submit Quiz!");
        } else {
            // update question title
            $(".questionNumber").html("Question #" + questionNumber);
        }

        // unselect the radio button
        $('input[name="answer"]').prop('checked', false);
    }
});

// calculates the players final score
// @returns the players score
function calculateScore() {
    var i = 0;
    var score = 0;

    // compares each answer with the correct one
    correctAnswers.forEach(element => {
        if (correctAnswers[i] === playerAnswers[i]) {
            score++;
        }
        i++;
    });

    return score;
}

// calculates the difference between the correct bonus question and the guessed answer
// @param users input
// @returns a string of the difference
function calculateBonus(userInput) {
    var score = bonusAnswer - userInput;

    // inverts if the answer is negative
    if (score < 0) {
        score = score * -1;
    }

    var scoreString = score.toString();
    var stringLength = scoreString.length;
    var finalString = "";

    // for loop to add commas to the returning string
    for (i = 0; i < scoreString.length; i++) {
        if (stringLength % 3 === 0 && i != 0) {
            finalString = finalString + ",";
        }
        stringLength--;
        finalString = finalString + scoreString[i];
    }

    return finalString;
}