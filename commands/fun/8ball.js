const Util = require('../../util/MitUtil.js');
const Discord = require("discord.js");

module.exports = {
  name: '8ball',
  description: "Devuelve una respuesta a tu pregunta owo",
  aliases: ['ball', 'ask'],
  usage: ' <Pregunta>',
  cooldown: 2,
  args: -1,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
      message.react('🎱');
      if (!args[1]) return message.reply("La pregunta es muy corta!, preguntame de nuevo >.<").then(m => m.delete(3000));
      const replies = [
        "Muy probablemente si u.u",
        "Lo dudo e.e",
        "Probablemente n.n",
        "Definitivamente .w.",
        "No estoy segura de eso o.O",
        "Por lo que veo, si u.u",
        "Digo que si, pero tu? unu",
        "A lo mejor si >w<",
        "Si nwn",
        "Todo apunta a que si >.>",
        "Pregunta de nuevo... no estoy segura, perdon :c",
        "Pregunta mas tarde jsjs nwn",
        "Predeciblemente si >u<",
        "No puedo predecir eso u.u",
        "Concentrate y pregunta de nuevo >w<",
        "No cuentes con ello... n.n",
        "Yo digo que totalmente en desacuero c:",
        "Mis fuentes dicen que no u.u",
        "No se ve que nada bueno pueda pasar ._.",
        "Tengo dudas al respecto o.o",
        "No :c", 
        "Jamas >.<", 
        "Definitivamente nwn", 
        "Segun Google todo apunta a que no >_>",
        "Puede que si... o puede que no uwu",
        "Por el bien de todos, no u.u"
    ];
      const result = Math.floor((Math.random() * replies.length));
      const question = args.slice(0).join(" ");
      const embed = new Discord.MessageEmbed()
        .setAuthor("🎱 La bola 8 dice...")
        .setColor('RANDOM')
        .addField("Pregunta:", question)
        .addField("Mi respuesta:", replies[result]);
      return message.channel.send(embed);
    }
};

