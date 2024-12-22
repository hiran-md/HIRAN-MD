const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "movie",
    alias: ["sinhalasub","mv","mv2","cinesubz","ytsmx","ginisisila"],
    desc: "Movie download.",
    react: "❗",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = `
❗If you are not a premierum user 🚫						

🚫ඔබ Premierum User කෙනෙකු නොවේ.

💸 please contact us and purchase the movie download facility                                                                                                              

🪀Contact Owner : https://wa.me/94711451319`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/2elpxs.png`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
