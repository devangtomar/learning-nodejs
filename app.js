var greet = require("./greet");
greet();


var person = {
    firstname : 'John',
    lastname : 'Doe',
    greet: function(){
        console.log("hello, " + this.firstname + " " + this.lastname);
    }

};

person.greet();

console.log(person['firstname']);

/* 

if-else in the NodeJS

*/


const amount = 12

if (amount< 10)
{
    console.log("Smaller number");
}
else
{
    console.log("Bigger number");
}

console.log(`Hey it's my first node app!`);


/* 

Global - No window!!!

__dirname : path to current directory
__filename : file name
require : function to use modules (commonJS)
module : info about current module file
process : info about env where the program is being executed


*/

// Modules

// for spliting the code into different files...

// const names = require(`./4-name`);

// names("Devang")
// names("Sonali")


/* 
if you call a function itself in the module and then those action under the function will be executed just by require()

*/


/* 

Built-in Modules:

1) OS
2) Path
3) FS
4) HTTP


Modules has : properties and functions

*/

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds..
console.log(`The system update is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)


// Path module :
const path = require('path')
console.log(path.sep) // separator on the OS you're running...

const filepath = path.join('/content', 'subfolder', './test.txt')
console.log(filepath)

console.log(path.basename(filepath))
console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))


// FS module : filesystem

// Asynchronus 

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./test.txt', 'utf8')
console.log(first)

writeFileSync('./test1.txt', `Here is the result ${first}`)

// to append...

writeFileSync('./test1.txt', `Here is the result ${first}`, { flag: 'a'})

// Non-Asynchronus

const { readFile, writeFile } = require('fs')

readFile('./test.txt', 'utf-8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    console.log(result)
})



