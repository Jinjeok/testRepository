const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');
const levelSystem = require('./src/level_system')(client);
const setMod = require('./src/mod')(client);

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
});

client.on('ready', () => {
    console.info(config.version);
    client.user.setActivity('Orange Sapphire', { type: 'LISTENING' });
});

client.on('error', console.error);
client.login(config.token);
