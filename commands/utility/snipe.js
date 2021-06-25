const Discord = require("discord.js");
const db = require(`../../util/Database`);

module.exports = {
  name: "snipe",
  aliases: ["ms", "messagesnipe", "last"],
  category: "Utilidad",
  usage: '',
  cooldown: 2,
  args: 0,
  description: "Obtiene un mensaje eliminado UwU",
  async execute(client, message, args, snipes) {
    
    const msg = client.snipes(message.channel.id)
    if(!msg) return message.channel.send("Al parecer no se han eliminado mensajes u.u")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.profile)
    .setDescription(msg.content)
    .setTimestamp()
    if(msg.image) {
		embed.setImage(msg.image)
	}
    message.channel.send(embed) 
  }
};