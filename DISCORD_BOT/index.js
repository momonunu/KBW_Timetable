const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('tNzcyODU4MzA5MzM3MTUzNTM3.X6AyYw.wWHb2d4RgsdxLi15q0n8cle5o2M');