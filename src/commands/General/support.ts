import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      ` *I'M FROM CELESTIAL*\n\n
⭐*CELESTIAL NEWS*:https://chat.whatsapp.com/DmsXJlgwaF9efsfAwEtRJP\n\n 
⭐*CELESTIAL*:https://chat.whatsapp.com/IZYFwOGf7I12x0zsefSY\n\n
⭐*CELESTIAL CASINO*:https://chat.whatsapp.com/IUIAiDPgKCp4LsefsOf7HE\n\n 
⭐*CELESTIAL QUIZ*:https://chat.whatsapp.com/Fp0lBMx8kKvA5yRJwsefk9`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Links in personal message");
  };
}
