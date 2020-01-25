const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '>'


bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'kick':

      const user = message.mentions.users.first();

      if(user){
        const member = message.guild.member(user);

        if(member){
          member.kick('*You have been kicked.*').then(() =>{
            message.reply(`*Kicked ${user.tag}*`);
          }).catch(err =>{
            message.reply('*Unable to kick the member.*')
            console.log(err);
          });
        } else{
            message.reply("*Member isn/`t in the server.*")
        }
      } else{
          message.reply('*You need to specify a person!*')
      }
    break;
  }

  switch (args[0]) {
    case 'ban':

      const user = message.mentions.users.first();

      if(user){
        const member = message.guild.member(user);

        if(member){
          member.ban({ression: '*You have been banned.*'}).then(() =>{
            message.reply(`*Banned ${user.tag}*`);
          }).catch(err =>{
              message.reply('*Unable to ban the player.*')
              console.log(err);
          })
        } else{
            message.reply("*Member isn/`t in the server.*")
        }
      } else{
          message.reply('*You need to specify a person!*')
      }
    break;
  }




});

bot.login('process.env.token')

bot.on('ready', () => {
  console.log('Moderation launched...')
  bot.user.setActivity('Gordo Community', { type: 'WATCHING'}).catch(console.error);
})
