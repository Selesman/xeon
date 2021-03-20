const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Jail Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}jail-log [@kanaletiket]\` : ** Jail Log Kanalını Ayarlarsınız..**
:white_small_square: **=**\`${client.ayarlar.prefix}jail-log-kapat\` : ** Jail Log Kanalını Sıfırlarsınız.**            
:white_small_square: **=**\`${client.ayarlar.prefix}jail-yetkili-role [@üyeEtiket]\` : ** Jail Atabilicek Bir Kullanıcı Grubu Yaratırsınız.**   
:white_small_square: **=**\`${client.ayarlar.prefix}jail-karantina-rol [@üyeEtiket]\` : ** Jail Cezalı Rolunu Ayarlamanıza Olanak Sağlar.**         
      \`\`\`    Jail Komutu Nasıl Kullanılır \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}jail [@rolEtiket]\` 

\`\`\`Jail'den Kurtulmak İçin Gerekenler \`\`\`
\`    Tekrar Kayıt Olmanız Gerekmektedir. \`

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
  name: "jail-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'jail-sistemi'
};