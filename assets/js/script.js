$(function () {
    displayTime()
    setInterval(displayTime, 1000);


    function displayTime() {
        var currentTime = $("#dayTime");
        var current = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
        currentTime.text(current);
    }





























})