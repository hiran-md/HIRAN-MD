const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "029RhRgR#5CwH9FCGlgqne1D1-31bkK8fM3vwTOV26NnyiwoxgdM",
MONGODB: process.env.MONGODB || "mongodb://mongo:KqJnmqHCeXKVyXNTSJkBxlsoxfjyLBwD@mongodb.railway.internal:27017"
};
