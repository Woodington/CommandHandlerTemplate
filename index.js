const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [30211] }); 


const config = require('./config/config.json') 

const token = config.token; 

const fs = require("fs");

const prefix = config.prefix; 

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))  
client.commands = new Discord.Collection(); 
for(const file of commandFiles) { 
    const command = require(`./commands/${file}`); 

    client.commands.set(command.name, command); 
} 

client.once('ready', () => {  
    console.log(`Ready - Logged in as ${client.user.username}`); 
});  

client.on("messageCreate", (message) => { 
    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase() 

    if(command === "ping") { //test command
        client.commands.execute("ping").run(client, message, args); 
    } /
});    

client.login(token); 
