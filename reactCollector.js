const { MessageEmbed } = require("discord.js")

//This is a code sample.
const sendMsg = async() => {
    const listEmoji = ['✅', '❌']
    const botMessage = await /* don't forgot the async parameter*/ message.channel.send(new MessageEmbed()
        .setTitle("You'r parameters")
    ).then(async(m) => {
        listEmoji.forEach(react => {
            await m.react(react)
        })
    })

    botMessage.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name == listEmoji[0] || reaction.emoji.name === listEmoji[1]), {time: 1000*60*2/*Time for react in milliseconds*/, max: 1/*Maximum times react for 1 reaction */}).then(collected => {
        if (collected.first().emoji.name == listEmoji[0]) {
            //do something
        } else {
            //do another thing
        }
    })
}
sendMsg()