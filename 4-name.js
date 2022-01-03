const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

console.log(module);

const firstname = "Devang"
const lastname = "Tomar"


// export defaults...
module.exports = sayHi;

// for multiple values
module.exports = {firstname, lastname};

// Another way of exporting
module.exports.fname = firstname;