const { Client, Collection, MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "HELP COMMANDS",
  execute(message) {
    let commands = message.client.commands.array();
    let helpEmbed = new MessageEmbed()
      .setAuthor(`Help BOT`)
      .setThumbnail(message.author.avatarURL({dynamic: "true"}))
      .setFooter(message.author.username,message.author.displayAvatarURL({ dynamic: "true" }))
      .setColor("RANDOM")
      
    .setDescription(`\`

INFO COMMANDS 

help, ping, uptime,

MUSIC COMMANDS

loop, lyricns ,remove
,nowplaying, pause,play
queue, radio ,skipto 
resume,search, shuffle
skip, stop, volume

FILTERS COMMANDS 

bassboost ,8D ,vaporwave 
,nightcore ,phaser ,tremolo
vibrato ,surrounding ,pulsator 
,subboost ,clear

\`
**[   SUPPORT  ](https://discord.gg/VehtKMcb2N)** -  [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=828649540113661962&permissions=8&scope=bot) 

    //////////////
   //////////////
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
