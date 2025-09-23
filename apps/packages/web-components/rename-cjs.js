import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "dist");

const commonJsFile = path.join(distPath, "index.js");
const renamedCommonJsFile = path.join(distPath, "index.cjs");

fs.rename(commonJsFile, renamedCommonJsFile, (err) => {
  if (err) {
    console.error("Error renaming CommonJS file:", err);
  } else {
    console.log("Successfully renamed CommonJS output to index.cjs");
  }
});
