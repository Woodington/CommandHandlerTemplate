const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [30211] }); 


const config = require('./config/config.json') //Declars Config File

const token = config.token; //Decalares Token

const fs = require("fs"); //Declares Filesystem 

const prefix = config.prefix; //Prefix (config file to edit :))

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))  //Lays down framework for command handler
client.commands = new Discord.Collection(); //Lays down framework for command handler
for(const file of commandFiles) { //Lays down framework for command handler
    const command = require(`./commands/${file}`); //Lays down framework for command handler

    client.commands.set(command.name, command); //Lays down framework for command handler
} 

client.once('ready', () => {  //Sends a message to console when the bot starts
    console.log('Ready'); //Sends a message to console when the bot starts
});  //Sends a message to console when the bot starts 

client.on("messageCreate", (message) => { 
    if(!message.content.startsWith(prefix) || message.author.bot) return; //Checks if 1) Command doesnt start with prefix, 2) If the command is sent by a bot. If either are true will not go through

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase() //Makes the command not case senstive

    if(command === "ping") { //test command
        client.commands.get("ping").run(client, message, args); //test command
    } //test command
});    

client.login(token); 