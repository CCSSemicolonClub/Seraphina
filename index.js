const { AoiClient, LoadCommands } = require("aoi.js");
const config = require("./config.json");

const bot = new AoiClient({
  token: config.TOKEN,
  prefix: config.PREFIX,
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd,"./commands/");

// Ping Command Example
bot.command({
  name: "ping",
  code: `Pong! $pingms, $getVar[botName] online`,
});

bot.variables({
  // Variables
  botName: "Seraphina",
});




