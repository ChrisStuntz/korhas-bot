import { GatewayIntentBits, Events, Message } from "discord.js";
import { client } from "./bot";
import dotenv from "dotenv";
dotenv.config();

const DISCORD_ACCESS_TOKEN = process.env.DISCORD_TOKEN;

client.login(DISCORD_ACCESS_TOKEN);