const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Ban Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}ban [@üyeEtiket]\` : ** Etiketlediğiniz Kişiyi Sunucudan Yasaklarsınız.**
:white_small_square: **=**\`${client.ayarlar.prefix}unban [@üyeEtiket]\` : ** Etiketlediğiniz Kişiyi Sunucu Yasağını Kaldırırsınız.**
:white_small_square: **=**\`${client.ayarlar.prefix}ban-log [@üyeEtiket]\` :  ** Yasaklanan Kişilerin Bilgisini Gösterir.**
:white_small_square: **=**\`${client.ayarlar.prefix}ban-yetki-role [@üyeEtiket]\` :  ** Yasaklama Yetkilisini Ayarlama**
            \`\`\`         Komutları Kapatma İçin \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}ban-sistem-kapat [@rolEtiket]\` : ** Yasaklama Sistemini Kapatır.**
      \`\`\`    Yasaklama Komutu Nasıl Kullanılır \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}ban [@rolEtiket]\` 

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
  name: "ban-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'ban-sistemi'
};