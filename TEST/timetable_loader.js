const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'https://intranet.tam.ch/kbw/public/public-schedule?onlyTable=0&returnEntity=class&entityId=1125&date=2021-03-08&showBasicTimetable=0&width=99.99%25'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let table = $("table");

    console.log(title.html());
});

var i;

for (i = 0 in object) {
    $("td")
        
    
}