/**
 * Created by jteng on 2/17/16.
 */
function startTimer(minutes) {
    var currentTimeInSeconds = 60 * minutes;
    $(".timer").text(getTime(currentTimeInSeconds--));

    setInterval(function() {
        var time = getTime(currentTimeInSeconds--);
        $(".timer").text(time);
    }, 1000);
}

function getTime(seconds) {
    var minutes = Math.floor(seconds / 60);

    var seconds = seconds % 60;

    if (seconds === 0) {
        seconds = '00';
    }

    return minutes + ":" + seconds;
}
startTimer(60);
