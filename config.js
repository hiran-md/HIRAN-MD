const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qctgkCLT#hDM_0mJgGAeqYVjxuf_V3FJIkmtxSXGXQdfufa-E4Q4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/187024208?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello i am alive now",
};
