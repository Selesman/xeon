const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Xeon Sunucu Hizmetleri`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}yetkili\` : **Yetkili Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}moderasyon\`:  **Moderasyon Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}sistemler\`:  **Sunucu Kontol Sistemlerini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}kullanıcı\` :  **Kullanıcı Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}bot\` :  **Bot Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}eğlence\`: **Eğlence Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}ekonomi\`:  **Ekonomi Komutlarını Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}yapımcım\`:  **Yapımcımın Kim Olduğunu Gösterir**
:white_small_square: **=**\`${client.ayarlar.prefix}geliştirici\`:  **Geliştirici Seçenekleri Gösterir.**

`)
.setImage("https://cdn.discordapp.com/attachments/781288209773756426/821915842656600064/Xeon_Bot_6.gif")
.setThumbnail(message.author.avatarURL())
    message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Xeon Yardım komutu',
  usage: 'yardım'
};