const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();
    let helpEmbed = new MessageEmbed()
    .setAuthor("Help Commands!","https://cdn.discordapp.com/emojis/775437938142085170.gif?v=1&size=64")
    .setImage('https://media.discordapp.net/attachments/807301710237270026/808391933759455282/image0.gif')
    .setTitle(`**SONG BOT**`)
    .setThumbnail("")
    .setAuthor("Prefix [ $ ]","")
    .setDescription(` 
\`Help Commands\`

**Music Command**

**| x!paly | x!stop | x!skip | x!skipto | x!volume |**

**| x!queue | x!loop | x!pause | x!nowplaying |**

**| x!shuffle | x!uptime | x!search | x!remove |**

**| x!clip | x!clips | x!lyrics | x!move | x!playlist |**

**Music Easy Commands**

**| x!p | x!s | x!sk | x!st | x!v | x!q | x!l | x!pa | x!np |**

**| x!sh | x!u | x!se | x!rm | x!r | x!ms | x!b | x!sp |**

**| x!c | x!cl | x!pl | x!mv | x!ly | x!add | x!h |**
     
**[ INVITE ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=828649540113661962&permissions=8&scope=bot)** 
**[ SUPPORT BOT  ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=733469607175913593&permissions=8&scope=bot)**                                                                

`)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};

