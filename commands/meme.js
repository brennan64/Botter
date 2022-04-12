const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "meme",
    async execute (message, args, client) {
        const memes = await client.channels.fetch("780496589525483581"); //get messages from memes
        const messageO = await memes.messages.fetch();   
        const messageA = Array.from(messageO);
        const picA = [];
        
        for (const message of messageA) {
            const messageKey = message[1].attachments.keys().next().value; 
            
            if (messageKey) {
              picA.push(message[1].attachments.get(messageKey).url); //scrape all images from said msgs
            }
        }

        const memeUrl = picA[Math.floor(Math.random() * picA.length)]; //   
        message.reply('Heres a meme\n' + memeUrl); //reply with dog pic
    }
}
    