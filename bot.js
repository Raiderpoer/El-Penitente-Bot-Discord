const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("El Penitente listo!");

    client.user.setPresence( {
        status: "online",
        game: {
            name: "Encendiendo el cirio",
            type: "PLAYING"
        }
    });
 });
client.on('guildMemberAdd', member => {
        let memberTag = member.user.tag;
    member.guild.channels.get('636699247626027011').send("<:bell:636962191635120190><:hammer:636966349146554408> Hola <@" + member.id + "> bienvenid@ al servidor de Discord de **El Penitente**!");
});
client.login(process.env.BOT_TOKEN); 