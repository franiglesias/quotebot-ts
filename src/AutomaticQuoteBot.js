"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticQuoteBot = void 0;
var AdSpace_1 = require("./AdSpace");
var BlogAuctionTask_1 = require("./BlogAuctionTask");
var AutomaticQuoteBot = /** @class */ (function () {
    function AutomaticQuoteBot() {
    }
    AutomaticQuoteBot.prototype.sendAllQuotes = function (mode) {
        var blogs = AdSpace_1.AdSpace.getAdSpaces();
        for (var blog in blogs) {
            var blocAuctionTask = new BlogAuctionTask_1.BlogAuctionTask();
            blocAuctionTask.priceAndPublish(blog, mode);
        }
    };
    return AutomaticQuoteBot;
}());
exports.AutomaticQuoteBot = AutomaticQuoteBot;
