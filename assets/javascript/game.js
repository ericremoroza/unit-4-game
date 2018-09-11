/*
crystal game
variables? 4 crystals, number of wins and losses, random number
a random number is generated
    each crystal assigned random number between 1-12 and we need to click the crystals to equal the generated number
        when a crystal is clicked, the player's score is updated
    that number changes every time we win or lose
        if (player's score = generated number) {
            wins++;
            reassign values to crystals;
            generate new number;
            player's score reset to zero;
        }
        if (player's score > generated number) {
            losses++;
            reassign values to crystals;
            generate new number;
            player's score reset to zero;
        }
*/
var randomNumber = Math.floor(Math.random() * 99);
var wins;
var losses
var userSum = 0;

$("#random").html('Target Number: ' + randomNumber);
for (var i = 0; i < 4; i++) {
    var genNumbers = Math.floor(Math.random() * 12);
    var crystal = $("<div>");
        crystal.attr({"class": 'individual-boxes', "dat-number": genNumbers})
    $(".crystals").append(crystal);

}

$(".individual-boxes").on("click", function() {
    var number = parseInt($(this).attr('dat-number'));
    userSum += number;
    console.log(userSum);
});