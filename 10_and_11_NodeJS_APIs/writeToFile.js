const fs = require("fs/promises");
const encoder = new TextEncoder();

fs.appendFile("sample.txt", encoder.encode("Hello NodeJS!"))
    .then(() => {
        console.log("Successfully written text to file");
    })
    .catch(err => {
        console.log("Faced some exception while writing to a file");
        console.log(err);
    }); 