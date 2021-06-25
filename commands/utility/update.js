const Discord = require('discord.js');

module.exports = {
    name: 'update',
    description: "Muestra los cambios y actualizaciones .w.",
    aliases: ['changelog', 'whatsnew'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        message.react('839258453917827122');
        const clientico = client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        const colorify = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 'RANDOM';
        const recent = 'Versión 1.7.0';
        const fecha = '22/06/2021';
        const embed = new Discord.MessageEmbed()
          .setColor(colorify)
          .setAuthor(`Historial de cambios de ${client.user.username}`, clientico)
          .addField(`• ${recent} - ${fecha}`, 'Aqui se muestran mis actualizaciones recientes y los cambios que traen consigo UwU', false)
          .addField(`**<a:kitsunity_sparkling_star:839520700317302825> | Añadido**`, 
		            `<a:arrow_kitsunity:839285735018332201> Nuevos comandos agregados!!
					<a:arrow_kitsunity:839285735018332201> Se agregaron mas gifs a las acciones existentes
					<a:arrow_kitsunity:839285735018332201> Se agrego la funcion \`colorify\` cuyo objetivo es el de poner el color del rol en los embeds
					<a:arrow_kitsunity:839285735018332201> Se agrego el comando \`snake\``)
		  .addField(`**<a:kitsunity_sparkling_star:839520700317302825> | Modificado**`, 
		            `<a:arrow_kitsunity:839285735018332201> Se hicieron mejoras en el comando \`botinfo\`
<a:arrow_kitsunity:839285735018332201> Se mejoro el comando \`bigtext\` y ahora soporta simbolos y numeros`)
		  .addField(`**<a:kitsunity_sparkling_star:839520700317302825> | Reparado**`, 
		            `<a:arrow_kitsunity:839285735018332201> Se repararon los comandos \`help\` y \`rules\` que no cambiaban de pagina cuando se reaccionaba!!
					<a:arrow_kitsunity:839285735018332201> Se reparo el comando \`antispam\` que no funcionaba correctamente
					<a:arrow_kitsunity:839285735018332201> Se reparo el comando \`feedback\` ya que no dejaba enviar sugerencias de mas de un argumento`)
          .addField(`**<a:kitsunity_sparkling_star:839520700317302825> | Removido**`, 
		            `<a:arrow_kitsunity:839285735018332201> Se removio temporalmente el comando \`serverinfo\` por que presentaba fallas muy extrañas`)
		  .addField(`**<a:kitsunity_sparkling_star:839520700317302825> | Cancelado**`, 
		            `<a:arrow_kitsunity:839285735018332201> Se cancelo el uso a futuro de la libreria \`discord.js-collector\` ya que dejo de recibir mantenimiento y se esta trabajando en agregar una nueva y propia`)
		  .setFooter(`💝 Número de versión | ${recent}`, clientico)
        return message.channel.send(embed);    
    }
};