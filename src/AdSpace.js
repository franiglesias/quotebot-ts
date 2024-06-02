"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdSpace = void 0;
var TechBlogs_1 = require("./TechBlogs");
var AdSpace = /** @class */ (function () {
    function AdSpace() {
    }
    AdSpace.getAdSpaces = function () {
        if (this.cache.length > 0) {
            return this.cache;
        }
        this.cache = TechBlogs_1.TechBlogs.listAllBlogs();
        return this.cache;
    };
    AdSpace.cache = [];
    return AdSpace;
}());
exports.AdSpace = AdSpace;
