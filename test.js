import {fetchDownloadCount} from "./dist/index.js";

console.log("go")

await fetchDownloadCount("make-bot.ts").then(console.log).catch(console.error)

console.log("done")

