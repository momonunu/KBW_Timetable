const HtmlTableToJson = require('html-table-to-json');
 
const jsonTables = HtmlTableToJson.parse(`<table class="ttps-scheduler-table"><colgroup><col style="width:(100/6)%"><col style="width:(100/6)%"><col style="width:(100/6)%"><col style="width:(100/6)%"><col style="width:(100/6)%"><col style="width:(100/6)%"></colgroup><tbody><tr><th class="ttps-title-cell"></th><th class="ttps-title-cell">Montag 08.03.2021</th><th class="ttps-title-cell">Dienstag 09.03.2021</th><th class="ttps-title-cell">Mittwoch 10.03.2021</th><th class="ttps-title-cell">Donnerstag 11.03.2021</th><th class="ttps-title-cell">Freitag 12.03.2021</th></tr><tr><th class="ttps-title-cell">07:45-08:30</th><td class="ttps-block" rowspan="11">Aufnahmeprüfungen, unterrichtsfrei</td><td class="ttps-block" rowspan="11">Aufnahmeprüfungen, unterrichtsfrei</td><td class="ttps-lesson"><ul></ul></td><td class="ttps-lesson"><ul></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ttp-mod-deleted">D</span><span class="ttps-span-center ttp-mod-deleted">Wp</span><span class="ttps-span-right ttp-mod-deleted">B202</span></li></ul></td></tr><tr><th class="ttps-title-cell">08:40-09:25</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">E</span><span class="ttps-span-center ">Fy</span><span class="ttps-span-right ">B215</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">F</span><span class="ttps-span-center ">Ft</span><span class="ttps-span-right ">B001</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ttp-mod-deleted">D</span><span class="ttps-span-center ttp-mod-deleted">Wp</span><span class="ttps-span-right ttp-mod-deleted">B202</span></li></ul></td></tr><tr><th class="ttps-title-cell">09:45-10:30</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">M</span><span class="ttps-span-center ">Tf</span><span class="ttps-span-right ">B316</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ttp-mod-deleted">D</span><span class="ttps-span-center ttp-mod-deleted">Wp</span><span class="ttps-span-right ttp-mod-deleted">B202</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">SM</span><span class="ttps-span-center ">Bz</span><span class="ttps-span-right "></span></li></ul></td></tr><tr><th class="ttps-title-cell">10:40-11:25</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">M</span><span class="ttps-span-center ">Tf</span><span class="ttps-span-right ">B316</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">WR</span><span class="ttps-span-center ">Fr</span><span class="ttps-span-right ">B303</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">Gg</span><span class="ttps-span-center ">Wa</span><span class="ttps-span-right ">B311</span></li></ul></td></tr><tr><th class="ttps-title-cell">11:35-12:20</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">WR</span><span class="ttps-span-center ">Fr</span><span class="ttps-span-right ">B309</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">WR</span><span class="ttps-span-center ">Fr</span><span class="ttps-span-right ">B303</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">Gg</span><span class="ttps-span-center ">Wa</span><span class="ttps-span-right ">B311</span></li></ul></td></tr><tr><th class="ttps-title-cell">12:30-13:15</th><td class="ttps-lesson"><ul></ul></td><td class="ttps-lesson"><ul></ul></td><td class="ttps-lesson"><ul></ul></td></tr><tr><th class="ttps-title-cell">13:25-14:10</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ttp-mod-deleted">F</span><span class="ttps-span-center ttp-mod-deleted">Ft</span><span class="ttps-span-right ttp-mod-deleted">B204</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">E</span><span class="ttps-span-center ">Fy</span><span class="ttps-span-right ">B209</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">M</span><span class="ttps-span-center ">Tf</span><span class="ttps-span-right ">A510</span></li></ul></td></tr><tr><th class="ttps-title-cell">14:20-15:05</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ttp-mod-deleted">F</span><span class="ttps-span-center ttp-mod-deleted">Ft</span><span class="ttps-span-right ttp-mod-deleted">B204</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Hl</span><span class="ttps-span-right ">B410</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Kb</span><span class="ttps-span-right ">B408</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Lf</span><span class="ttps-span-right ">B414</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Nf</span><span class="ttps-span-right ">B418</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Wb</span><span class="ttps-span-right ">B405</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Sf</span><span class="ttps-span-right ">B415</span></li><li><span class="ttps-span-left ">NaTech</span><span class="ttps-span-center ">Ve</span><span class="ttps-span-right ">A410</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">SK</span><span class="ttps-span-center ">Jt</span><span class="ttps-span-right ">A121</span></li></ul></td></tr><tr><th class="ttps-title-cell">15:15-16:00</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">SK</span><span class="ttps-span-center ">Jt</span><span class="ttps-span-right ">BU201</span></li><li><span class="ttps-span-left ">SM</span><span class="ttps-span-center ">Bz</span><span class="ttps-span-right ">A120</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Hl</span><span class="ttps-span-right ">B410</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Kb</span><span class="ttps-span-right ">B408</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Lf</span><span class="ttps-span-right ">B414</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Nf</span><span class="ttps-span-right ">B418</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Wb</span><span class="ttps-span-right ">B405</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Sf</span><span class="ttps-span-right ">B415</span></li><li><span class="ttps-span-left ">NaTech</span><span class="ttps-span-center ">Ve</span><span class="ttps-span-right ">A410</span></li></ul></td><td class="ttps-lesson"><ul></ul></td></tr><tr><th class="ttps-title-cell">16:10-16:55</th><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">SK</span><span class="ttps-span-center ">Jt</span><span class="ttps-span-right ">BU201</span></li><li><span class="ttps-span-left ">SM</span><span class="ttps-span-center ">Bz</span><span class="ttps-span-right ">A120</span></li></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Hl</span><span class="ttps-span-right ">B410</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Kb</span><span class="ttps-span-right ">B408</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Lf</span><span class="ttps-span-right ">B414</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Nf</span><span class="ttps-span-right ">B418</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Wb</span><span class="ttps-span-right ">B405</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Sf</span><span class="ttps-span-right ">B415</span></li><li><span class="ttps-span-left ">NaTech</span><span class="ttps-span-center ">Ve</span><span class="ttps-span-right ">A410</span></li></ul></td><td class="ttps-lesson"><ul></ul></td></tr><tr><th class="ttps-title-cell">17:05-17:50</th><td class="ttps-lesson"><ul></ul></td><td class="ttps-lesson"><ul><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Hl</span><span class="ttps-span-right ">B410</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Kb</span><span class="ttps-span-right ">B408</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Lf</span><span class="ttps-span-right ">B414</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Nf</span><span class="ttps-span-right ">B418</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Wb</span><span class="ttps-span-right ">B405</span></li><li><span class="ttps-span-left ">C</span><span class="ttps-span-center ">Sf</span><span class="ttps-span-right ">B415</span></li><li><span class="ttps-span-left ">NaTech</span><span class="ttps-span-center ">Ve</span><span class="ttps-span-right ">A410</span></li></ul></td><td class="ttps-lesson"><ul></ul></td></tr></tbody></table>`);
 
console.log(jsonTables.results);
 
console.log(jsonTables.count);w