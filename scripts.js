// Load Entity Ids
$(document).ready(function () {
    $("#class").load("https://timetable.ddns.net:8080/https://intranet.tam.ch/kbw/public/public-schedule?returnEntity=class .ttps-entity-option", function () {
        $("[selected=selected]").remove();
    });
    $("#teacher").load("https://timetable.ddns.net:8080/https://intranet.tam.ch/kbw/public/public-schedule?returnEntity=teacher .ttps-entity-option", function () {
        $("[selected=selected]").remove();
    });
    $("#room").load("https://timetable.ddns.net:8080/https://intranet.tam.ch/kbw/public/public-schedule?returnEntity=room .ttps-entity-option", function () {
        $("[selected=selected]").remove();
    });
    // $('.ttps-entity-option').addClass('newClassWithYourStyles').removeClass('.ttps-entity-option');

});


// Load Timetable
$(document).ready(function () {
    $("#ttps-content").load("https://timetable.ddns.net:8080/https://intranet.tam.ch/kbw/public/public-schedule?onlyTable=0&returnEntity=class&entityId=1088&date=2020-11-30&showBasicTimetable=1 .ttps-scheduler");
    $('.ttps-entity-option').addClass('newClassWithYourStyles').removeClass('.ttps-entity-option');
});