import { RegisterSlashCommandRunner } from "../../types/RegisterSlashCommand";
const cmd: RegisterSlashCommandRunner = {
    register: i => {
        i.reply('Kiet VIP vai lon');
    },
    builder: {
        description: 'Reply with Pong!',
    }
}
module.exports = cmd;