import { AnySelectMenuInteraction, AutocompleteInteraction, ButtonInteraction, CacheType, ChatInputCommandInteraction, Interaction, MessageContextMenuCommandInteraction, ModalSubmitInteraction, UserContextMenuCommandInteraction } from "discord.js";
import { SlashCommandBuilderInterface } from "./SlashCommandBuilder";

export interface RegisterSlashCommand {
    register: (interaction: Interaction<CacheType>) => Promise<void> | void,
    builder: SlashCommandBuilderInterface
}

export interface RegisterSlashCommandRunner {
    register: (interaction: ChatInputCommandInteraction<true>) => Promise<void> | void,
    builder: SlashCommandBuilderInterface
}