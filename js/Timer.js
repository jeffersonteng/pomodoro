function Timer(minutes) {
    var zeroTime = "0:00";
    var timeRemaining = 60 * minutes;
    var intervalId = undefined;
    var timerSettings = new TimerSettings();

    function enableSettings() {
        timerSettings.addBreakListeners();
        timerSettings.addSessionListeners();
    }

    function disableSettings() {
        timerSettings.removeBreakListeners();
        timerSettings.removeSessionListeners();
    }

    function startTimer() {
        if (timeRemaining === 0) return;

        disableSettings();

        $(".timer").text(getTime(timeRemaining));

        intervalId = setInterval(function () {
            if (timeRemaining === 0) {
                $(".timer").text(getTime(timeRemaining));
                stopTimer();
                return true;
            }

            var time = getTime(--timeRemaining);
            $(".timer").text(time);
        }, 1000);
    }

    function stopTimer() {
        enableSettings();
        clearInterval(intervalId);
    }

    function getTime(seconds) {
        if (seconds === 0) return zeroTime;

        var minutes = Math.floor(seconds / 60);

        var seconds = seconds % 60;

        if (seconds === 0) {
            return minutes + ":00";
        }
        if (seconds < 10) {
            return minutes + ":0" + seconds;
        }

        return minutes + ":" + seconds;
    }

    return {
        startTimer: startTimer,
        stopTimer: stopTimer
    }
}

