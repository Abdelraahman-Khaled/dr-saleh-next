const fs = require("fs");
const files = ["messages/ar.json", "messages/en.json"];

files.forEach((file) => {
  try {
    const content = fs.readFileSync(file, "utf8");
    JSON.parse(content);
    console.log(`${file} is valid`);
  } catch (e) {
    console.error(`${file} is INVALID: ${e.message}`);
    // Find approximate line number
    const lines = fs.readFileSync(file, "utf8").split("\n");
    let current = "";
    for (let i = 0; i < lines.length; i++) {
      current += lines[i] + "\n";
      try {
        JSON.parse(current + "}"); // Try to close it
      } catch (err) {
        // Still failing
      }
    }
  }
});
