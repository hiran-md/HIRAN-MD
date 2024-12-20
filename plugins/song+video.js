// YTMP3 DL PLUGIN

const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); // request package.json "@dark-yasiya/yt-dl.js": "latest"


cmd({
    pattern: "song",
    alias: ["ytmp3","ytsong"],
    react: "🎶",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("Please give me Yt url or Name")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found !")

let yts = yt.results[0]  
const ytdl = await ytmp3(yts.url)
		
let ytmsg = `🎶 SONG DOWNLOADER 🎶


🎵 *TITLE :* ${yts.title}
🤵 *AUTHOR :* ${yts.author.name}
⏱ *RUNTIME :* ${yts.timestamp}
👀 *VIEWS :* ${yts.views}
🖇️ *URL :* ${yts.url}
`
// SEND DETAILS
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}`}, { quoted: mek });

// SEND AUDIO TYPE
await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek })

// SEND DOC TYPE
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: `${ytdl.result.title}` }, { quoted: mek })


} catch (e) {
console.log(e)
reply(e)
}}
)

// FOLLOW US: https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27

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
> time: ${data.timestamp}
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
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"POWERD BY HIRANYA_SATHSARA 💗"},{quoted:mek})
  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
