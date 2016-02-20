function Timer() {
    var ZERO_TIME = "0:00";

    var intervalId = undefined;
    var timerSettings = new TimerSettings();

    var currentTimer = TimerEnum.SESSION;

    function enableSettings() {
        timerSettings.addBreakListeners();
        timerSettings.addSessionListeners();
    }

    function disableSettings() {
        timerSettings.removeBreakListeners();
        timerSettings.removeSessionListeners();
    }

    function switchTimer() {
        stopTimer();
        var nextTimer = undefined;

        if (currentTimer === TimerEnum.SESSION) {
            nextTimer = TimerEnum.BREAK;
        }

        if (currentTimer === TimerEnum.BREAK) {
            nextTimer = TimerEnum.SESSION;
        }

        currentTimer = nextTimer;
        startTimer();
    }

    function startTimer() {
        var timeRemaining = timerSettings.getDisplayTime(currentTimer);

        if (timeRemaining === ZERO_TIME) return;

        disableSettings();

        $(".timer").text(timeRemaining);

        intervalId = setInterval(function () {
            if (timeRemaining === 0) {
                $(".timer").text(timeRemaining);
                switchTimer();
                return true;
            }

            timeRemaining = timerSettings.decrementTime(currentTimer);

            $(".timer").text(timeRemaining);
        }, 1000);
    }

    function stopTimer() {
        enableSettings();
        clearInterval(intervalId);
    }


    return {
        startTimer: startTimer,
        stopTimer: stopTimer
    }
}

