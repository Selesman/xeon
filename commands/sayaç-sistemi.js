const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Sayaç Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}sayaç [#kanalEtiket (Sayı Giriniz)]\` : **Sunucun için toplam bir rakam tut.**
:white_small_square: **=**\`${client.ayarlar.prefix}sayaç-kapat\` : **Kurulu olan sayaç sistemi kapatır.**

`)
.setImage("https://cdn.discordapp.com/attachments/781288209773756426/821915842656600064/Xeon_Bot_6.gif")
.setThumbnail(message.author.avatarURL())
    message.channel.send(yardım)

  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sayaç-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'sayaç-sistemi'
};