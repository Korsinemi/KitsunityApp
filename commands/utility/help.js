const Util = require('../../util/MitUtil.js');
const Discord = require("discord.js");
const db = require('../../util/Database.js');

module.exports = {
    name: 'help',
    description: 'Regresa la lista de mis comandos .w.',
    aliases: ['commands', 'cmds'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    hidden: true,
    async execute(client, message, args) {
        let ServerPrefix = await db.get(`${message.guild.id}_prefix`);
        message.react('839258453917827122');
        let commands = client.commands.array();
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`Menú de ayuda de ${client.user.username} | ${commands.length} comandos`)
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        if (args[0] === '1') {
        embed.setTitle(`Categoria Acción <a:NekoDance:834162269075931177>`)
            .setDescription([
            `<a:kitsunity_sparkling_star:839520700317302825> **Descripción:** Estos comandos muestran una acción nwn`,
            `<a:kitsunity_sparkling_star:839520700317302825> **Comandos:**
            <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}cuddle\r
            <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}feed\r
            <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}shoot\r`,
            `\n<a:kitsunity_sparkling_star:839520700317302825> Para ayuda detallada escribe **${ServerPrefix}cmd comando**`,
            `\n<a:heart_kitsunity_arrow:839285735621656636> Puedes obtener ayuda adicional en el [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)`,
        ])
        return message.channel.send(embed);
        } else if (args[0] === '2' || args[0].toUpperCase() === 'REACTION') {
            embed.setTitle(`Categoria Reacción <a:BlushNeko:834162248549007402>`)
                .setDescription([
                `<a:kitsunity_sparkling_star:839520700317302825> **Descripción:** Estos comandos muestran una reacción owo`,
                `<a:kitsunity_sparkling_star:839520700317302825> **Comandos:**
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}blush\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}dance\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}wag\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}sip\r`,
                `\n<a:kitsunity_sparkling_star:839520700317302825> Para ayuda detallada escribe **${ServerPrefix}cmd comando**`,
                `\n<a:heart_kitsunity_arrow:839285735621656636> Puedes obtener ayuda adicional en el [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)`,
            ])
            return message.channel.send(embed);
        } else if (args[0] === '3') {
            embed.setTitle(`Categoria Utilidad <:NekoSip:834162226700091432>`)
                .setDescription([
                `<a:kitsunity_sparkling_star:839520700317302825> **Descripción:** Estos comandos son para utilidades >w<`,
                `<a:kitsunity_sparkling_star:839520700317302825> **Comandos:**
                En construccion .w.`,
                `\n<a:kitsunity_sparkling_star:839520700317302825> Para ayuda detallada escribe **${ServerPrefix}cmd comando**`,
                `\n<a:heart_kitsunity_arrow:839285735621656636> Puedes obtener ayuda adicional en el [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)`,
            ])
            return message.channel.send(embed); 
        } else if (args[0] === '4') {
            embed.setTitle(`Categoria Entretenimiento <:NekoHugAttack:834162195167182855>`)
                .setImage('https://i.imgur.com/STqiAX1.png')
                .setDescription([
                `<a:kitsunity_sparkling_star:839520700317302825> **Descripción:** Estos comandos son para pasar el rato :P`,
                `<a:kitsunity_sparkling_star:839520700317302825> **Comandos:**
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}8ball\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}ascii\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}avatar\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}cat\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}dog\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}flip\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}kemono\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}kitsune\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}neko\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}nekotext\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}owo\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}say\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}spoiler\r`,
                `\n<a:kitsunity_sparkling_star:839520700317302825> Para ayuda detallada escribe **${ServerPrefix}cmd comando**`,
                `\n<a:heart_kitsunity_arrow:839285735621656636> Puedes obtener ayuda adicional en el [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)`,
            ])
            return message.channel.send(embed);
    
        } else if (args[0] === '5') {
            embed.setTitle(`Categoria Economia - NUEVA!!! <:NekoHugAttack:834162195167182855>`)
                .setDescription([
                `<a:kitsunity_sparkling_star:839520700317302825> **Descripción:** Estos comandos son para usar mi sistema de economia :P`,
                `<a:kitsunity_sparkling_star:839520700317302825> **Comandos:**
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}bal\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}}daily\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}monthly\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}pay\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}rob\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}store\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}weekly\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}work\r`,
                `\n<a:kitsunity_sparkling_star:839520700317302825> Para ayuda detallada escribe **${ServerPrefix}cmd comando**`,
                `\n<a:heart_kitsunity_arrow:839285735621656636> Puedes obtener ayuda adicional en el [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)`,
            ])
            return message.channel.send(embed);
            
        } else if (args[0] === '6') {
            if (!message.channel.nsfw) return message.react('839289314411806740'), message.channel.send('<a:nsfw_kitsunity_alert:839289312956383232> Para ver estos comandos ve a un canal **NSFW** n.n')
            embed.setTitle(`Categoria Lewd <:NikaMyasoExcited:834162233977995354>`)
                .setDescription([
                `<a:kitsunity_sparkling_star:839520700317302825> **Descripción:** Baka... No dire nada >//<`,
                `<a:kitsunity_sparkling_star:839520700317302825> **Comandos:**
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}emoji\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}emoji\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}emoji\r
                <a:arrow_kitsunity:839285735018332201> ${ServerPrefix}emoji\r`,
                `\n<a:kitsunity_sparkling_star:839520700317302825> Para ayuda detallada escribe **${ServerPrefix}cmd comando**`,
                `\n<a:heart_kitsunity_arrow:839285735621656636> Puedes obtener ayuda adicional en el [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)`,
            ])
            return message.channel.send(embed);
        } else if (args[0] === '0') {
        message.channel.send(`${message.author} mande una lista completa de mis comandos a tus **MD** nwn!`)
		message.delete();
        let commands = client.commands.array();
        let Description = "";

        let helpEmbed = new Discord.MessageEmbed()
            .setTitle(`Ayuda | Lista de todos los comandos (${commands.length})`)
            .setFooter(`Escribe ${ServerPrefix}help [command] para mas ayuda`);

        var catergory = " ";
        commands.sort(function (a, b) {
            if (a.catergory < b.catergory) { return -1; }
            if (a.catergory > b.catergory) { return 1; }
            return 0;
        });

        commands.forEach((cmd) => {
            if (cmd.hidden) return;

            if (!message.channel.nsfw) {
                if (cmd.catergory == "NSFW") return;
            }
            
            if (catergory == " ") {
                catergory = cmd.catergory;
            }

            if (cmd.catergory != catergory) {
                helpEmbed.addField(`# ${catergory}`, Description);
                Description = "";
                catergory = cmd.catergory;
            }

            if (catergory == cmd.catergory) {
                Description += `\`\`${cmd.name}\`\`, `;
            }
        });


        helpEmbed.addField(`<a:arrow_kitsunity:839285735018332201> ${catergory}`, Description);
        return message.author.send(helpEmbed);
    } else if (args[0]) {
        const command = client.commands.get(args[0]) ||
                client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));

            if (!command) return message.reply(`Ese comando no existe, utiliza \`${ServerPrefix}help 0\` para ver mis comandos u.u`);

            let reply = "**Description:** " + command.description + "\n";
            reply += "**Cooldown:** " + command.cooldown + "\n";
            reply += "**Aliases:** " + command.aliases + "\n";
            reply += "\n**Usage:** \n" + ServerPrefix + command.name + " " + command.usage + "\n";

            const UsageEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Command: ' + ServerPrefix + command.name)
                .setDescription(reply)
                .setFooter("Requested by " + message.author.tag)
                .setTimestamp();

            return message.channel.send(UsageEmbed);
        } else {
        embed.setImage('https://media.discordapp.net/attachments/833437501535289369/841697246457888788/de0d9ede4a3dda883bbecf1e9deaa944d0d4fcf1_hq.gif')
             .setDescription([
		`<a:kitsunity_sparkling_star:839520700317302825> El prefix del bot es **${ServerPrefix}**`,
		`Para ayuda adicional puedes unirte al [servidor de soporte](https://discord.com/invite/RjeHPJy2GC)\n`,
		`<a:arrow_kitsunity:839285735018332201> **0** | Para ver todos los comandos en una lista\n`,
		`<a:kitsunit y_sparkling_star:839520700317302825> **Categorias:**`,
		`<a:arrow_kitsunity:839285735018332201> **1** | Acción <a:NekoDance:834162269075931177>`,
		`<a:arrow_kitsunity:839285735018332201> **2** | Reacción <a:BlushNeko:834162248549007402>`,
		`<a:arrow_kitsunity:839285735018332201> **3** | Utilidad <:NekoSip:834162226700091432>`,
		`<a:arrow_kitsunity:839285735018332201> **4** | Diversión <:NekoHugAttack:834162195167182855>`,
		`<a:arrow_kitsunity:839285735018332201> **5** | Economia - Nueva!! <:NekoHugAttack:834162195167182855>`,
		`<a:arrow_kitsunity:839285735018332201> **6** | Lewd <:NikaMyasoExcited:834162233977995354>`,
        `\n<a:heart_kitsunity_arrow:839285735621656636> Para ver los comandos escribe **${ServerPrefix}help <numero>**\n Ejemplo: **k=h 1** mostrara **Acción**`,
	].join("\n"));
	return message.channel.send(embed);
     }
   }
};
