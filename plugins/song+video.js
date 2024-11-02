const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me a Url or Title 🔍")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*HIRAN-MD YT SONG DONLOADER *🔰
> title: ${data.title}
> description: ${data.description}
> ago: ${data.ago}
> views: ${data.views}

MADE BY HIRANYA_SATHSARA 🙈💗


`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

///===============================DOWNLOAD AUDIO=========================///

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//==========SEND AUDIO===================//

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mp3",fileName:data.title + ".mp3",caption:"POWERD BY HIRANYA_SATHSARA 💗"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//================VIDEO-DL===========================//

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me a Url or Title 🔍")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*HIRAN-MD YT VIDEO DONLOADER *🔰
> title: ${data.title}
> description: ${data.description}
> ago: ${data.ago}
> views: ${data.views}

MADE BY HIRANYA_SATHSARA 🙈💗


`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

///===============================DOWNLOAD VIDEO=========================///

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//==========SEND VIDEO===================//

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"POWERD BY HIRANYA_SATHSARA 💗},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
