const { Client, Collection } = require('discord.js')
const client = new Client({intents: 32767})
const config = require('./config/config.json')

client.commands = new Collection()

const { DisTube } = require("distube")
const { default: SpotifyPlugin } = require("@distube/spotify")

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddSongWhenCreatingQueue: false,
    plugins: [new SpotifyPlugin()]
})
module.exports = client


require("./handlers/Events")(client)
require("./handlers/Commands")(client)

client.login(config.token)

