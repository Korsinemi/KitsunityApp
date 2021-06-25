const Discord = require('discord.js');

module.exports = {
    name: 'big',
    description: "Devuelve el emoji en una version grande .w.",
    aliases: ['bigemoji', 'bigfy', 'jumbo'],
    usage: ' <Emoji>',
    cooldown: 2,
    args: 0,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
        const [, emojiname, emojicode] = args[0].match(/^<a?:(.+):(\d+)>$/);
        const emoji = message.client.emojis.cache.find(e => e.name === emojiname);
        if (!emoji) { 
            try {
                const emoji = args[0].match(/^<a/) ? `https://cdn.discordapp.com/emojis/${emojicode}.gif` : `https://cdn.discordapp.com/emojis/${emojicode}.png`;
                const Bigmoji = new Discord.MessageAttachment(emoji);
                return message.channel.send(Bigmoji); //Print it
            } catch (e) { return message.channel.send(`${error} No encontre ese emoji u.u!`) }
          }
        const Bigmoji = new Discord.MessageAttachment(emoji.url)
        return message.channel.send(Bigmoji); //Print it
    }
};
