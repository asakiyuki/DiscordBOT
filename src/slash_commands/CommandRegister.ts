import fs from "fs";
import path from "path";
import { client } from "../client";
import { RegisterSlashCommand } from "../types/RegisterSlashCommand";
import { SlashCommandBuilderInterface } from "../types/SlashCommandBuilder";
import { CacheType, Interaction } from "discord.js";
const commandNames = fs.readdirSync(path.join(__dirname, './list/'), 'utf-8').map(v => v.split('.')[0]);
const commandExecute: ((interaction: Interaction<CacheType>) => Promise<void> | void)[] = [];
const discordCommandList: Array<SlashCommandBuilderInterface> = [];
for (const commandName of commandNames) {
    const command: RegisterSlashCommand = require(path.join(__dirname, `./list/${commandName}`));
    command.builder.name = commandName
    discordCommandList.push(command.builder);
    commandExecute.push(command.register);
}
console.log(discordCommandList);
client.on('interactionCreate', interaction => {
    console.log('test');
    if (interaction.isCommand()) commandExecute[commandNames.indexOf(interaction.commandName)](interaction);
});
export const CommandList = discordCommandList;