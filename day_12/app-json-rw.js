const fs = require("fs");

const outputFile = "output.json";

person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Write to a file
fs.writeFile(outputFile, JSON.stringify(person), (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully");
});
