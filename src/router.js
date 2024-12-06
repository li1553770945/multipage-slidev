"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoutes = generateRoutes;
var fs_1 = require("fs");
var path_1 = require("path");
function generateRoutes(srcDir) {
    var files = fs_1.default.readdirSync(srcDir).filter(function (file) { return file.endsWith('.md'); });
    return files.map(function (file) {
        var name = path_1.default.basename(file, '.md');
        return {
            path: "/".concat(name), // 生成 `/file-name` 路径
            component: path_1.default.join(srcDir, file),
        };
    });
}
