const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a shortened url",
  },
];

const token=''
const rest = new REST({ version: "10" }).setToken(
  token
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1236140116712488971"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
