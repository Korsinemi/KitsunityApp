module.exports = {
  name: 'auhelp',
  description: "Ayuda para los comandos Among Us .w.",
  aliases: ['amonghelp', 'auhlp'],
  usage: '',
  cooldown: 2,
  args: 0,
  catergory: 'Among Us',
  async execute(client, message, args) {
        message.channel.send('Click here for more information on how to use the bot -> https://github.com/reconlx/amongus-discord-bot/blob/main/README.md#-commands')
    }
}