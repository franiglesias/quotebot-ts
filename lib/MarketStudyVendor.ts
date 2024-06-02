/*
* This simulates a license required for running this 3rd party library
* You are not allowed to touch this file
*
* */

export class MarketStudyVendor {

    averagePrice(blog: string): number {
        if (process.env.LICENSE !== 'quotebot-license') {
            throw InvalidLicenseError("[Stupid license] Missing license!!!!")
        }

        function quote() {
            return Math.round(Math.random() * (4000) + 1000);
        }

        return quote()
    }
}

interface InvalidLicenseError extends Error {
    name: "InvalidLicenseError";
}

function InvalidLicenseError(msg: string) {
    const error = new Error(msg) as InvalidLicenseError
    error.name = "InvalidLicenseError";
    return error;
}
