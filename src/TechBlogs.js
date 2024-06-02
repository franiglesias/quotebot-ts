"use strict";
/*
This simulates a very slow database connection

You are not supposed to touch this file
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechBlogs = void 0;
var Sleep_1 = require("./Sleep");
var TechBlogs = /** @class */ (function () {
    function TechBlogs() {
    }
    TechBlogs.listAllBlogs = function () {
        try {
            (0, Sleep_1.sleep)(5000);
        }
        catch (e) {
            throw e;
        }
        return [
            "HackerNews",
            "Reddit",
            "TechCrunch",
            "BuzzFeed",
            "TheHuffPost",
            "TMZ",
            "GigaOM"
        ];
    };
    return TechBlogs;
}());
exports.TechBlogs = TechBlogs;
