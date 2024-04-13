const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const token = "your token";     // Met ton token ici le sang

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    setInterval(async () => {
        client.channels.cache.forEach(async (channel) => {
            if (channel.type == 'GROUP_DM') {
                try {
                    await channel.send('❌ pas de groupe sans ma permission ! ❌');
                    await channel.delete();
                
                } catch (error) {
                    console.error(error);
                }
            }
        });
    }, 2000);
});

client.login(token);
