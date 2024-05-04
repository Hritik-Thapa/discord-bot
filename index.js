const { Client, GatewayIntentBits } =require("discord.js");
const mongoose=require('mongoose');
const {connectMongoDb}=require('./connection')
const url=require('./models/url');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token="";

connectMongoDb('mongodb://localhost:27017/discord-bot').then(()=>console.log('Mongo Connected'))

client.on("messageCreate", (msg) => {
    if (msg.author.bot) return
    if(msg.content.startsWith('create')){
        const redirectUrl=msg.content.split('create ')[1];
        url.create({
            redirectUrl
        })
        msg.channel.send(`Created a shortened URL for ${redirectUrl}`);
        return
    }   
    msg.reply({content:'Hello I am bot'})
});

client.on('interactionCreate',(interaction)=>{
    interaction.reply('Created this url')
})

client.login(token
);
