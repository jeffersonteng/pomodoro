/**
 * Created by jteng on 2/19/16.
 */

function Pomodoro() {
    var count = 0;

    function initialize() {
        var timer = new Timer(0.05);
        timer.startTimer();

        $(".timerContainer").on("click", function() {
            if (count++ % 2 === 0) {
                timer.stopTimer()
                return true;
            }
            timer.startTimer();
        });
    }

    return {
        initialize: initialize
    }
};

$(document).ready(function() {
    var pom = new Pomodoro();
    pom.initialize();
});
