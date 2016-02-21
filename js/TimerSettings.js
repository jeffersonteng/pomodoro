/**
 * Created by jteng on 2/18/16.
 */

function TimerSettings() {

    var $breakTime = $('.breakTime');
    var $sessionTime = $('.sessionTime');

    var currentTimer = TimerEnum.SESSION;
    var breakTimeRemaining = getBreakTimeInSeconds();
    var sessionTimeRemaining = getSessionTimeInSeconds();

    var ZERO_TIME = "0:00";

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

    function refreshSessionDisplayTime() {
        sessionTimeRemaining = getSessionTimeInSeconds();
    }

    function refreshBreakDisplayTime() {
        breakTimeRemaining = getBreakTimeInSeconds();
    }

    function getDisplayTime() {
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

    function decrementTime() {
        if (currentTimer === TimerEnum.SESSION) {
            sessionTimeRemaining--;
            return getDisplayTime(currentTimer);
        }
        if (currentTimer === TimerEnum.BREAK) {
            breakTimeRemaining--;
            return getDisplayTime(currentTimer);
        }
    }

    function switchTimer() {
        var nextTimer = undefined;

        if (currentTimer === TimerEnum.SESSION) {
            nextTimer = TimerEnum.BREAK;
            $(".state").text("On Break");
            $("#redPom").hide();
            $("#greenPom").show();
        }

        if (currentTimer === TimerEnum.BREAK) {
            nextTimer = TimerEnum.SESSION;
            $(".state").text("In Session");
            $("#greenPom").hide();
            $("#redPom").show();
        }

        currentTimer = nextTimer;
    }

    return {
        getDisplayTime: getDisplayTime,
        decrementTime: decrementTime,
        switchTimer: switchTimer,
        getSessionTimeInMinutes: getSessionTimeInMinutes,
        getBreakTimeInMinutes: getBreakTimeInMinutes,
        refreshSessionDisplayTime: refreshSessionDisplayTime,
        refreshBreakDisplayTime: refreshBreakDisplayTime
    }
}
