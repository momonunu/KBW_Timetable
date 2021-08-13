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
    $("#ttps-content").load("https://kbw-timetable.herokuapp.com/https://intranet.tam.ch/kbw/public/public-schedule?onlyTable=0&returnEntity=class&entityId=1177&date=2021-08-23&showBasicTimetable=0&width=99.99%25 .ttps-scheduler", function () {
        $('.ttps-scheduler-table').addClass('table table-bordered border-dark');
    });
    //$('.ttps-entity-option').addClass('newClassWithYourStyles').removeClass('.ttps-entity-option');
});

$('.ttps-entity-option').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    // do something...
  });
  