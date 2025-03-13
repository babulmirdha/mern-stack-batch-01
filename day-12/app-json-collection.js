const fs = require("fs");

const outputFile = "persons.json";

persons = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Bob",
    age: 35,
    city: "Chicago",
  },
];

// Write to a file
fs.writeFile(outputFile, JSON.stringify(persons), (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully");
});
