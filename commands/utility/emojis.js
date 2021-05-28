const Discord = require('discord.js');

module.exports = {
    name: 'emoji',
    description: 'Muestra los emojis del servidor >w<',
    aliases: ['emojilist', 'emojis'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        try{
            let Emojis = "";
            let EmojisAnimated = "";
            let EmojiCount = 0;
            let Animated = 0;
            let OverallEmojis = 0;
            function Emoji(id){
                return bot.emojis.cache.get(id).toString()
            }
            message.guild.emojis.cache.forEach(emoji => {
                OverallEmojis++;
                if (emoji.animated) {
                    Animated++;
                    EmojisAnimated+=Emoji(emoji.id)
                } else {
                    EmojiCount++;
                    Emojis+=Emoji(emoji.id)
                }
            })
            const embed1 = new Discord.MessageEmbed()
               .setTitle(`Emojis de ${message.guild.name}`)
               .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png', size: 512 }))
               .setDescription(`\n**Emojis Comunes: [${EmojiCount}]**:\n${Emojis}`)
               .setColor('RANDOM')
            const embed2 = new Discord.MessageEmbed()
              .setDescription(`**Emojis Animados [${Animated}]**:\n${EmojisAnimated}\n`)
              .setColor('RANDOM')
            message.channel.send(embed1);
            message.channel.send(embed2);
            }catch(err){
                return message.channel.send('Oops! Algo a salido mal, intenta mas tarde >.<')

            }
        }
};