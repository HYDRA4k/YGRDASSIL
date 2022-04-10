const { Client } = require("discord.js")
const mongoose = require("mongoose")
const { Database } = require("../../config/config.json")


module.exports = {
    name: "ready",
    once: "true",
    /**
     * @param {Client} client
     */
    execute(client) {
        console.log("The client is now ready!")
        console.log(`Conectado como: ${client.user.tag}`)
        client.user.setActivity("SODIO", {
            type: "STREAMING",
            url: "https://www.twitch.tv/sodioplus"
        })

        if (!Database) return
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The client is now connected to the database!")
        }).catch((err) => {
            console.log(err)
        })


    }
}