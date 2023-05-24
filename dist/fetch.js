import * as http from "https";
import * as jsdom from "jsdom";
export function fetchDownloadCount(packageName) {
    return new Promise(function (resolve, reject) {
        http
            .get("https://npm-stat.com/charts.html?package=".concat(packageName, "&from=1977-01-23"))
            .on("error", function (e) {
            reject(e);
        })
            .on("data", function (chunk) {
            var _a, _b;
            var dom = new jsdom.JSDOM(chunk.toString());
            var downloadCount = Number((_b = (_a = dom.window.document
                .querySelector(".alternating tr:last-child > td:last-child")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.replace(/[,.\s]/g, ""));
            resolve(downloadCount);
        });
    });
}
