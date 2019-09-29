const userIn = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout
})

userIn.question("enter a command\n", (command)=> {
    console.log(command)
    if(command=="quit"){
        userIn.close();
    }
    
})
