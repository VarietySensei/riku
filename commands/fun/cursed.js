const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "cursed",
    category: "fun",
    description: "Sends an cursed image",
    run: async (client, message, args) => {
        const subReddits = ["Cursed_Images", "cursedimages", "MakeMeSuffer","cursed_cats", "cursedvideos", "cursedgifs", "cursedcomments", "cursed_or_blessed", "cursedmemes", "cursedjojo", "CursedMinecraft"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}