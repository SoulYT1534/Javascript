const javascript = require(`../index`)
const command = new javascript.checkCmd(1+1)
console.log(command.result().get())