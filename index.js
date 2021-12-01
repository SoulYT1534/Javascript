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
            return Boolean(command)
    }
}
}
}
}
    }
}
module.exports = {checkCmd}