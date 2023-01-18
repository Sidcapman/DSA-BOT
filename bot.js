// require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const reader = require("xlsx");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "hello") {
    message.reply("hello");
  }
   if (message.content === "getaProblem") {
     // read the Excel file
     //  const workbook = XLSX.readFile("pramodh.xlsx");
     //  console.log(workbook)
     //  const sheet_name_list = workbook.SheetNames[0];
     //  console.log(sheet_name_list)
     //  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

     //  // send the data as a message to the designated channel
     //  message.channel.send(data);
     const file = reader.readFile("./pramodh.xlsx");
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
    console.log(temp[2])
    message.channel.send({ content: temp[2].Question_Link });
     // let data = [];

     // const sheets = file.SheetNames;

     // for (let i = 0; i < sheets.length; i++) {
     //   const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
     //   temp.forEach((res) => {
     //     data.push(res);
     //   });
     // }
     // const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]
     // // Printing data
     // console.log(data);
   }
});

client.login(
  "Discord Token"
);
