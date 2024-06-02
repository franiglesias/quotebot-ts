"use strict";
/*
* This simulates a production service that you should not call directly from a not-production environment
* You are not allowed to touch this file
*
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotePublisher = void 0;
var QuotePublisher = /** @class */ (function () {
    function QuotePublisher() {
    }
    QuotePublisher.publish = function (proposal) {
        console.log("You've pushed a dummy auction to a real ads platform, the business is upset!");
        process.exit(-1);
    };
    return QuotePublisher;
}());
exports.QuotePublisher = QuotePublisher;
