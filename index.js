const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefix = "!";

client.on("ready", () => {
    console.log(`Bot iniciado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    if (command === "hola") {
        message.reply("¡Hola! ¿Cómo estás?");
    } else if (command === "aportador") {
        const embed = new EmbedBuilder()
            .setTitle("Aportador del Bot")
            .setDescription("Este código base simple es una ayuda para la comunidad de desarrolladores que desean iniciarse en la creación de bots para Discord. Siéntete libre de usarlo, modificarlo y compartirlo.")
            .setColor(0x0099ff)
            .setImage("https://imgur.com/a/ewRnDb6")
            .setFooter({ text: "Espero que les funcione este Discord Bot BASE para sus proyectos... <3" });
        
        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("GitHub de strex")
                .setURL("https://github.com/Anonimus1221/Bot-Template-.js")
                .setStyle(ButtonStyle.Link)
        );
        
        message.reply({ embeds: [embed], components: [button] });
    }
});

client.login(process.env.TOKEN);
