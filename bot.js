const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("611698482759073804")
setInterval(function() {
channel.send(`خيرا تعلمت سبام ههه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);