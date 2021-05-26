const Util = require('../../util/MitUtil.js');
const Discord = require('discord.js');

module.exports = {
  name: 'credits',
  description: 'Los que hicieron mi desarrollo posible nwn',
  aliases: ['creators'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Utilidad',
  async execute(client, message, args) {
    message.react('💞');
    const embed = new Discord.MessageEmbed()
        .setTitle("Créditos")
        .setDescription('Kitsunity fue desarrollada gracias a los siguientes usuarios')
        .addField('> Desarrollo', 'KitsuneCode')
        .addField('> Diseño', '🌹🌑•花子•🌕✨ y KitsuneCode')
        .addField('> Donantes', 'FataliX, orion2913, $amuelegend, 360gamenolife y Kodaishimawara')
        .addField('> Agradecimientos', '🌹🌑•花子•🌕✨, Ichiro 『👑』 y ★彡𝓑𝓸𝔂𝓯𝓻𝓲𝓮𝓷𝓭彡★')
        .addField('> Agradecimiento a servidores <:NekoSip:834162226700091432>', 'Ꮯꮮꮜᏼ Ꮻꭲꭺꮶꮜ Ꮐꭺꮇꭼ, Anime no Sekai, ⚡¡̷H̷I̷B̷R̷Y̷D̷!̷⚡ y 𝐃𝐚𝐫𝐤 𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭')
        .setThumbnail(client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setFooter(`Colaborame y tu nombre aparecera aqui nwn`)
        message.channel.send(embed);
    }
};