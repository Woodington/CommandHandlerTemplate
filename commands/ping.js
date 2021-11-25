const {Client, Message, MessageEmbed} = require('discord.js'); 
const fs = require('fs'); 
const config = require('../config/config.json') 

module.exports = { 
    name: "ping",
    description: "Test Command",
    execute(client, message, args){
        message.channel.send('pong!');          
    }
}
