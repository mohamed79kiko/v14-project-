nst { Client, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');
const { readdirSync } = require('node:fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

readdirSync('./handlers').forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(TOKEN);
