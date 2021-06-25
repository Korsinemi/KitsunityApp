module.exports = {
    name: 'choose',
    description: `Dejame escojer alguno uwu`,
    aliases: ['select'],
    usage: ' <Opcion 1>,<Opcion 2>,<Opcion 3>...',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        message.react('🆗');
        let replies = args.join(" ").split(",");
        const result = Math.floor((Math.random() * replies.length));
        message.channel.send(`Kya!!, de tus opciones he elejido: **${replies[result]}**`)
  }
};    

