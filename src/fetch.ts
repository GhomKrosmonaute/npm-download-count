import * as http from "https";
import * as jsdom from "jsdom";

export function fetchDownloadCount(
  packageName: `@${string}/${string}` | string
): Promise<number> {
  return new Promise((resolve, reject) => {
    http
      .get(
        `https://npm-stat.com/charts.html?package=${packageName}&from=1977-01-23`
      )
      .on("error", function (e) {
        reject(e);
      })
      .on("data", function (chunk) {
        const dom = new jsdom.JSDOM(chunk.toString());

        const downloadCount = Number(
          dom.window.document
            .querySelector(".alternating tr:last-child > td:last-child")
            ?.textContent?.replace(/[,.\s]/g, "")
        );

        resolve(downloadCount);
      });
  });
}
