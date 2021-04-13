const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
require('dotenv').config()
let fs = require('fs');
client.commands = new Discord.Collection();

let commandFiles = fs.readdirSync('./commands/').filter(file =>file.endsWith ('.js'));

for (let file of commandFiles) {
    let command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Kruffalo is online');
});

client.on('message', async (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = await message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(args);
    console.log(command);
    if (!client.commands.has(command)) {
        return;
    }

    try {
        client.commands.get(command).execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply(`There was an error trying to execute the "${command}" command.`);
    }
});

client.login(DISCTOKEN);


