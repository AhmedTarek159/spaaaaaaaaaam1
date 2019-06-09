const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("587222730936549387")
setInterval(function() {
channel.send(`ahmed hamody ahmed hamody ahmed hamody ahmed hamody`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
