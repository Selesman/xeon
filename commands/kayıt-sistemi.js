const Discord = require('discord.js');
exports.run = function(client, message) {
  

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Kayıt Sistemi`)
.setDescription(`


:white_small_square: **=**\`${client.ayarlar.prefix}erkek-role [@rolEtiket]\` : ** Kayıt İçin Erkek Rolü Belirlersiniz.**
:white_small_square: **=**\`${client.ayarlar.prefix}kadın-role [@rolEtiket]\` : ** Kayıt İçin Kadın Rölü Belirlersiniz.**            
:white_small_square: **=**\`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\` : ** Kayıt İçin Yönetici Rölü Belirlersiniz.**   
:white_small_square: **=**\`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\` : ** Otorol Sisteminin Düzgün Çalışması İçin Kayıtsız Rolünü Belirlemelisiniz.**         
      \`\`\`    Kayıt Komutu Nasıl Kullanılır \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix}e [@ÜyeETİKET] [İsim] [Yaş]\` : ** Belirlediğiniz Erkek Kullanıcı Rölünü Tahsis Eder**
:white_small_square: **=**\`${client.ayarlar.prefix}k [@ÜyeETİKET] [İsim] [Yaş]\` : ** Belirlediğiniz Kadın Kullanıcı Rölünü Tahsis Eder**   

\`\`\`        [ Silme Komutları ]        \`\`\`
:white_small_square: **=**\`${client.ayarlar.prefix} erkek-sil [@rolEtiket]\` : ** Belirlediğiniz Erkek Kullanıcı Rölünü Siler.**   
:white_small_square: **=**\`${client.ayarlar.prefix}kadın-sil [@rolEtiket]\` : ** Belirlediğiniz Kadın Kullanıcı Rölünü Siler.**  
:white_small_square: **=**\`${client.ayarlar.prefix}k [@rolEtiket]\` : ** Belirlediğiniz Yönetici Rölünü Siler.**   
:white_small_square: **=**\`${client.ayarlar.prefix}k [@rolEtiket]\` : ** Belirlediğiniz Kayıtsız Rölünü Siler**   
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
  name: "kayıt-sistemi",
  description: 'Xeon Sistemler komutu',
  usage: 'kayıt-sistemi'
};