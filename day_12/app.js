const fs = require("fs");

const outputFile = "output.txt";

// Write to a file
fs.writeFile(outputFile, "Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully");
});

// Append to a file
fs.appendFile(outputFile, "\nAppended content!", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
    return;
  }
  console.log("Content appended successfully");
});

// Read from a file
fs.readFile(outputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading from file:", err);
    return;
  }
  console.log("File content:", data);
});
