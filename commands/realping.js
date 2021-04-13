module.exports = {
    name: 'realping',
    execute(message, args, client){
        message.reply('calculating ping..')
        .then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp;
            message.reply(`API latency: ${client.ws.ping}ms, Bot Latency: ${ping}ms`);
        })
    }
}