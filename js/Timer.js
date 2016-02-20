function Timer() {
    var $breakTime = $('.breakTime');
    var $sessionTime = $('.sessionTime');
    var $decreaseBreak = $('.decreaseBreak');
    var $increaseBreak = $('.increaseBreak');
    var $decreaseSession = $('.decreaseSession');
    var $increaseSession = $('.increaseSession');

    var ZERO_TIME = "0:00";

    var intervalId = undefined;
    var timerSettings = new TimerSettings();

    function refreshSessionDisplayTime() {
        timerSettings.refreshSessionDisplayTime();
        updateDisplayTime();
    }

    function refreshBreakDisplayTime() {
        timerSettings.refreshBreakDisplayTime();
        updateDisplayTime();
    }

    function updateDisplayTime() {
        $(".timer").text(timerSettings.getDisplayTime());
    }

    function decreaseBreakTimer() {
        var currTime = timerSettings.getBreakTimeInMinutes();
        if (currTime === 0) return;

        $breakTime.text(currTime - 1);
        refreshBreakDisplayTime();
    }

    function increaseBreakTimer() {
        $breakTime.text(timerSettings.getBreakTimeInMinutes() + 1);
        refreshBreakDisplayTime();
    }

    function decreaseSessionTimer() {
        var currTime = timerSettings.getSessionTimeInMinutes();
        if (currTime === 0) return;

        $sessionTime.text(currTime - 1);
        refreshSessionDisplayTime();
    }

    function increaseSessionTimer() {
        $sessionTime.text(timerSettings.getSessionTimeInMinutes() + 1);
        refreshSessionDisplayTime();
    }

    function addBreakListeners() {
        $decreaseBreak.on("click", decreaseBreakTimer);
        $increaseBreak.on("click", increaseBreakTimer);
    }

    function addSessionListeners() {
        $decreaseSession.on("click", decreaseSessionTimer);
        $increaseSession.on("click", increaseSessionTimer);
    }

    function removeBreakListeners() {
        $decreaseBreak.off("click");
        $increaseBreak.off("click");
    }

    function removeSessionListeners() {
        $decreaseSession.off("click");
        $increaseSession.off("click");
    }

    function enableSettings() {
        addBreakListeners();
        addSessionListeners();
    }

    function disableSettings() {
        removeBreakListeners();
        removeSessionListeners();
    }

    function switchTimer() {
        stopTimer();
        timerSettings.switchTimer();
        startTimer();
    }

    function startTimer() {
        var timeRemaining = timerSettings.getDisplayTime();

        if (timeRemaining === ZERO_TIME) return;

        disableSettings();

        $(".timer").text(timeRemaining);

        intervalId = setInterval(function () {
            if (timeRemaining === ZERO_TIME) {
                $(".timer").text(timeRemaining);
                switchTimer();
                return true;
            }

            timeRemaining = timerSettings.decrementTime();

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

