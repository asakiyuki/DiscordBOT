import { LocalizationMap, ToAPIApplicationCommandOptions } from "discord.js";

export interface SlashCommandBuilderInterface {
    name?: string,
    name_localizations?: LocalizationMap,
    description: string,
    description_localizations?: LocalizationMap,
    option?: ToAPIApplicationCommandOptions[],
    default_permission?: boolean,
    default_member_permissions?: Permissions | null,
    dm_permission?: boolean,
    nsfw?: boolean,
}