const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qctgkCLT#hDM_0mJgGAeqYVjxuf_V3FJIkmtxSXGXQdfufa-E4Q4",
MONGODB: process.env.MONGODB || "mongodb://mongo:VpHlqbljmZjrtCbReSHbrijwDwfUbajC@mongodb.railway.internal:27017"
};
