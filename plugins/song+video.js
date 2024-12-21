// YT MP3 DOWNLOAD COMMAND 

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me song name or url !')
    
const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${apilink}/download/ytmp3?url=${data.url}`)
    
let message = `‎‎           🎶 YT SONG DOWNLOADER 🎶


 🎵 ‎Title: ${data.title}
 ⏱ Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
  📎 Url: ${data.url}
`
  
await conn.sendMessage(from, { image: { url : data.thumbnail }, caption: message }, { quoted : mek })
  
// SEND AUDIO NORMAL TYPE and DOCUMENT TYPE
await conn.sendMessage(from, { audio: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek })
await conn.sendMessage(from, { document: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: `${data.title}`}, { quoted: mek })
  
} catch(e){
console.log(e)
reply(e)
}
})

// FOLLOW US : https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27
//================VIDEO-DL===========================//

const yts = require('yt-search');
const fg = require('api-dylux');

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
