require('dotenv').config()

const { obtenerRespuesta, enteroRandom } = require('./functions/functions');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.once('ready', () => {
  console.log(`Bot listo como ${client.user.tag}`);
});

const opciones = `### Opciones:
1.- Dame un imagen de un personaje de Dragon Ball Z
2.- Dame el nombre un planeta de Dragon Ball Z
3.- Deme una transformacion de Dragon Ball Z`;

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  msg = message.content.toLowerCase();

  if(msg === 'hola'){

    console.log(message);
    message.reply(`Hola ${message.author.globalName}, que tal?, en que puedo ayudarte?`);
    message.reply(opciones);

  }else if(msg === '1'){
    
    obtenerRespuesta(`${process.env.API}characters/`+enteroRandom(1, 42), message, opciones);
  
  }else if(msg == '2'){
    
    obtenerRespuesta(`${process.env.API}planets/`+enteroRandom(1, 7), message, opciones);
  
  }else if(msg == '3'){
    
    obtenerRespuesta(`${process.env.API}transformations/`+enteroRandom(1, 40), message, opciones);
  
  }else{
  
    message.reply('No entendí tu mensaje, ¿Puedes ingresar alguna de las indicadas?');
    message.reply(opciones);
  
  }

});

client.login(process.env.TOKEN);