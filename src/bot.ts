import { Client } from "discord.js";

import config from "./config";

export const client = new Client({intents: ["Guilds", "GuildMessages", "DirectMessages"]});

client.once("ready", () => {
    console.log("Bot is ready!");
});