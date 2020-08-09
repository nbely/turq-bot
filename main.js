// add discord.js files to use related commands, set prefix and token, and create bot to access discord
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');
const runServer = require('./server');


// mongoose / mongodb setup
const mongoose = require('mongoose');
const conf = require('./config.json');
mongoose.connect(conf.uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected to mongodb');
});

// create commands collection so that command files can be referenced from command folder
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// add command files to collection for execution
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

// log in Turq-Bot
bot.once('ready', () =>{
	console.log('Turq-Bot is online!');
});

// watch for messages that start with the config file prefix or were posted by the bot
bot.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	// remove prefix, set words that are spaced apart as separate strings in args array
	const args = message.content.slice(prefix.length).split(/ +/);
	// set first argument to lowercase command
	const command = args.shift().toLowerCase();

	switch(command) {

	case 'check':
		bot.commands.get('check').execute(message, args);
		break;

	case 'dex':
		bot.commands.get('dex').execute(message, args);
		break;

	case 'help':
		bot.commands.get('help').execute(message, args);
		break;

	case 'map':
		bot.commands.get('map').execute(Discord, message, args, fs);
		break;

	case 'new':
		// check to see if user has the required staff roles needed to use the new command
		if(message.member.roles.cache.some(role => role.name === 'Administrators') || message.member.roles.cache.some(role => role.name === 'Global Mods') || message.member.roles.cache.some(role => role.name === 'RPG Mods')) {
			// message.channel.send(`Member ${message.member.user.username} is recognized as an Administrator. A profile will be created.`);
			bot.commands.get('new').execute(Discord, bot, message, args);
		}
		else {
			message.channel.send(`>>> You do not have the required role(s) needed to use the '${command}' command.`);
		}
		break;

	case 'travel':
		bot.commands.get('travel').execute(Discord, message, args);
		break;

	case 'wild':
		bot.commands.get('wild').execute(Discord, message);
		break;

	// if no command found, return message
	default:
		message.channel.send(`>>> The command, ${command}, is not recognized. Please check your spelling or enter '-help' for a full list of commands.`);
		break;
	}

});


bot.login(token);
runServer();