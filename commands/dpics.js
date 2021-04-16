const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'dpics',
    async execute (message, args, client) {
        const dogposting = await client.channels.fetch("800034786466725898"); //get messages from dogposting
        const messageObj = await dogposting.messages.fetch();   
        const messageArray = Array.from(messageObj);
        const picArray = [];
        
        for (const message of messageArray) {
            const messageKey = message[1].attachments.keys().next().value; 
            
            if (messageKey) {
              picArray.push(message[1].attachments.get(messageKey).url); //scrape all images from said msgs
            }
        }

        const dogUrl = picArray[Math.floor(Math.random() * picArray.length)]; //   
        message.reply('Heres a puppel\n' + dogUrl); //reply with dog pic
    }
}
    