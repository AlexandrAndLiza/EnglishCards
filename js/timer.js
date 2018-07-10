var timer;
var currentAnswer;

var presentDays = new Date(); //число запуска теста
var twoDays = new Date("2018","6","9"); //месяц - 1
var oneWeek = new Date("2018","6","13");
var twoWeek = new Date("2018","6","18");

if(twoDays > presentDays){
    currentAnswer = "Хорошее начало";
    timer = setInterval(function() {
        timeBetweenDates(twoDays);
    }, 1000);
}else if(twoDays < presentDays && oneWeek > presentDays){
    currentAnswer = "Тащи эту катку";
    timer = setInterval(function() {
        timeBetweenDates(oneWeek);
    }, 1000);
}else{
    currentAnswer = "ЕЕ бой";
    timer = setInterval(function() {
        timeBetweenDates(twoWeek);
    }, 1000);
}


timer = setInterval(function() {
    timeBetweenDates(twoDays);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}