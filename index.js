module.exports = {
    fileName: "index.js"
}
const command = `hello` === `e`
class checkCmd {
    constructor (command) {
if(Boolean(command)) {
    return  {
        result: function () {
        return {
            log: function () {
                return Boolean(command)
            },
            get: function () {
                return Boolean(command)
        }
    }
    }
}
}else{
   return {
       result: function () {
       return {
           log: function () {
            return console.log(Boolean(command))
           },
        get: function () {
            return console.log(Boolean(command))
    }
}
}
}
}
    }
}
const cmd = new checkCmd(command)
cmd.result().log()