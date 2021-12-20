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
function ascii_converter(text) {
    const figlet = require('figlet');
    const db = require(`quick.db`)
    figlet(text, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        db.set("ascii-art", data)
    });
    return {data: db.get("ascii-art"), console: {log: function(){
        setTimeout(() => {
        console.log(db.get("ascii-art"))
    }, 500)
    }}}
    }
module.exports = {checkCmd, ascii_converter}