/**
 * Created by jteng on 2/18/16.
 */

function TimerSettings() {
    var $decreaseBreak = $('.decreaseBreak');
    var $increaseBreak = $('.increaseBreak');
    var $decreaseSession = $('.decreaseSession');
    var $increaseSession = $('.increaseSession');
    var $breakTime = $('.breakTime');
    var $sessionTime = $('.sessionTime');

    var breakTimeRemaining = getBreakTimeInSeconds();
    var sessionTimeRemaining = getSessionTimeInSeconds();

    var ZERO_TIME = "0:00";

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

    function getBreakTimeInMinutes() {
        return parseInt($breakTime.text());
    }

    function getBreakTimeInSeconds() {
        return 60 * getBreakTimeInMinutes();
    }

    function getSessionTimeInMinutes() {
        return parseInt($sessionTime.text());
    }

    function getSessionTimeInSeconds() {
        return 60 * getSessionTimeInMinutes();
    }

    function decreaseBreakTimer() {
        var currTime = getBreakTimeInMinutes();
        if (currTime === 0) return;

        $breakTime.text(currTime - 1);
    }

    function increaseBreakTimer() {
        $breakTime.text(getBreakTimeInMinutes() + 1);
    }

    function decreaseSessionTimer() {
        var currTime = getSessionTimeInMinutes();
        if (currTime === 0) return;

        $sessionTime.text(currTime - 1);
    }

    function increaseSessionTimer() {
        $sessionTime.text(getSessionTimeInMinutes() + 1);
    }

    function getDisplayTime(currentTimer) {
        var seconds = undefined;

        if (currentTimer === TimerEnum.SESSION) {
            seconds = sessionTimeRemaining;
        }
        if (currentTimer === TimerEnum.BREAK) {
            seconds = breakTimeRemaining;
        }

        if (seconds === 0) return ZERO_TIME;

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

    function decrementTime(currentTimer) {
        if (currentTimer === TimerEnum.SESSION) {
            sessionTimeRemaining--;
            return getDisplayTime(currentTimer);
        }
        if (currentTimer === TimerEnum.BREAK) {
            breakTimeRemaining--;
            return getDisplayTime(currentTimer);
        }
    }

    return {
        addBreakListeners: addBreakListeners,
        addSessionListeners: addSessionListeners,
        removeBreakListeners: removeBreakListeners,
        removeSessionListeners: removeSessionListeners,
        getDisplayTime: getDisplayTime,
        decrementTime: decrementTime
    }
}
