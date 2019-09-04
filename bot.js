const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("491332353449263107")
setInterval(function() {
channel.send(`he he he he he he he hehe he he he he he he he he he he  he he he`);
}, 100)
})

client.login(process.env.BOT_TOKEN);
