const { readFile, read } = require("fs");
const { join } = require("path");

const validateCredentials = (username, password) => {
    readFile(join(__dirname, "../data/logindata.csv"), (err, contents) => {
        if (err) {
            console.error(err);
            return false;
        }

        let contentsJSON = contents.toString().split("\n").map((row) => row.split(","));
        
    })
}