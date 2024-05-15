import { REST, Routes } from "discord.js";
import { client } from "./client"
import { CommandList } from "./slash_commands/CommandRegister";
(require('dotenv') as { config: () => void }).config();
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN as string);
rest.put(Routes.applicationCommands(process.env.CLIENT_ID as string), { body: CommandList });
client.on('ready', _ => console.log(`${_.user.username}#${_.user.discriminator} has ready at ${_.readyAt}`));
client.login(process.env.TOKEN as string);