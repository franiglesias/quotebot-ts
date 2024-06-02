"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var AutomaticQuoteBot_1 = require("./AutomaticQuoteBot");
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.main = function (args) {
        var bot = new AutomaticQuoteBot_1.AutomaticQuoteBot();
        bot.sendAllQuotes("FAST");
    };
    return Application;
}());
exports.Application = Application;
