const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json')

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	console.log(message.content);
	if (message.content === `${prefix}ping`) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send("boop.")
	}
});