const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Fake Hesap Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}fake-üye-süresi [@üyeEtiket]\` : ** Sunucunuza giren kullanıcılara verilen rolü etiketle.**
:white_small_square: **=**\`${client.ayarlar.prefix}fake-ceza-rolü [@üyeEtiket]\` : ** Sunucunuzdaki Cezalı Rolünü Etiketleyin.**            
:white_small_square: **=**\`${client.ayarlar.prefix}fake-üye-kanalı [@üyeEtiket]\` : ** Sunucunuzdaki Cezalı Rolü için Kayıt Logu Ayarla.**     


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
  name: "fake-hesap-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'fake-hesap-sistemi'
};