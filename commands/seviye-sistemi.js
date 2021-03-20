const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Seviye Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}seviye aç\` : ** Seviye Sistemini Aktif Eder.**
:white_small_square: **=**\`${client.ayarlar.prefix}seviye kapat\` : **Seviye Sistemini Deaktif Eder.**
:white_small_square: **=**\`${client.ayarlar.prefix}rank\` :  ** Sıralamayı Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}rank\` :  ** Sıralamayı Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}rank / rank [@ÜyeETİKET] \` :  ** Sıralamayı Gösterir.**
      \`\`\`    Sıfırlama Komutları İçin \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-tag-role-sil\` : ** Ayarlamış olduğunuz yasaklı tag rolünü siler.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-tag-kapat\` : ** Ayarlı bulunan yasaklı tagınızı kapatır.**
:white_small_square: **=**\`${client.ayarlar.prefix}yasaklı-yeni-üye-role-sil\` : ** Ayarlı olan yeni üye rolünü kapatır.**
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
  name: "seviye-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'seviye-sistemi'
};