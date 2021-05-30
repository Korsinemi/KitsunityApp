module.exports = {
    name: 'big',
    description: "Devuelve el emji en una version grande .w.",
    aliases: ['bigemoji', 'bigfy'],
    usage: ' <Pregunta>',
    cooldown: 2,
    args: -1,
    catergory: 'Entretenimiento',
    async execute(client, message, args) {
           let emoji = message.guild.emojis.cache.find(e => e.id == 'id')
           let emoji_pic = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? 'gif' : 'png'}` 
        message.channel.send(emoji_pic);
    }
};
