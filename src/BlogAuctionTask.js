"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogAuctionTask = void 0;
var MarketStudyVendor_1 = require("../lib/MarketStudyVendor");
var QuotePublisher_1 = require("../lib/QuotePublisher");
var BlogAuctionTask = /** @class */ (function () {
    function BlogAuctionTask() {
        this.marketDataRetriever = new MarketStudyVendor_1.MarketStudyVendor;
    }
    BlogAuctionTask.prototype.priceAndPublish = function (blog, mode) {
        var avgPrice = this.marketDataRetriever.averagePrice(blog);
        var proposal = avgPrice + 1;
        var timeFactor = 1;
        if (mode === 'SLOW') {
            timeFactor = 2;
        }
        if (mode === 'MEDIUM') {
            timeFactor = 4;
        }
        if (mode === 'FAST') {
            timeFactor = 8;
        }
        if (mode === 'ULTRAFAST') {
            timeFactor = 13;
        }
        if (proposal % 2 === 0) {
            proposal = 3.14 * proposal;
        }
        else {
            proposal = 3.15 * timeFactor * Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000);
        }
        QuotePublisher_1.QuotePublisher.publish(proposal);
    };
    return BlogAuctionTask;
}());
exports.BlogAuctionTask = BlogAuctionTask;
