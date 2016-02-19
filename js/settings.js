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

    function addBreakListeners() {
        $decreaseBreak.on("click", decreaseBreakTimer);
        $increaseBreak.on("click", increaseBreakTimer);
    }

    function addSessionListeners() {
        $decreaseSession.on("click", decreaseSessionTimer);
        $increaseSession.on("click", increaseSessionTimer);
    }

    function getBreakTime() {
        return parseInt($breakTime.text());
    }

    function getSessionTime() {
        return parseInt($sessionTime.text());
    }

    function decreaseBreakTimer() {
        $breakTime.text(getBreakTime() - 1);
    }

    function increaseBreakTimer() {
        $breakTime.text(getBreakTime() + 1);
    }

    function decreaseSessionTimer() {
        $sessionTime.text(getSessionTime() - 1);
    }

    function increaseSessionTimer() {
        $sessionTime.text(getSessionTime() + 1);
    }

    return {
        addBreakListeners: addBreakListeners,
        addSessionListeners: addSessionListeners
    }
}

$(document).ready(function() {
    var timerSettings = new TimerSettings();
    timerSettings.addBreakListeners();
    timerSettings.addSessionListeners();
});
