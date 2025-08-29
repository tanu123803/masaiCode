const fs = require("fs");

function readFileData(){
    try {
        const data = fs.readFileSync("data.txt", "utf-8");
        console.log("File Content:");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", err);
        
    }
}


function appendFileData() {
  try {
    fs.appendFileSync("data.txt", "\nThis is Appended data");
    console.log("Data appended successfully!");
  } catch (err) {
    console.error("Error appending file:", err);
  }
}

module.exports = { readFileData, appendFileData };