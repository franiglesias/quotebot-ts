"use strict";
/*
* This simulates a license required for running this 3rd party library
* You are not allowed to touch this file
*
* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketStudyVendor = void 0;
var MarketStudyVendor = /** @class */ (function () {
    function MarketStudyVendor() {
    }
    MarketStudyVendor.prototype.averagePrice = function (blog) {
        if (process.env.LICENSE !== 'quotebot-license') {
            throw InvalidLicenseError("[Stupid license] Missing license!!!!");
        }
        function quote() {
            return Math.round(Math.random() * (4000) + 1000);
        }
        return quote();
    };
    return MarketStudyVendor;
}());
exports.MarketStudyVendor = MarketStudyVendor;
function InvalidLicenseError(msg) {
    var error = new Error(msg);
    error.name = "InvalidLicenseError";
    return error;
}
