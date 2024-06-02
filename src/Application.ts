// @ts-ignore
import {MarketStudyVendor} from "../lib/MarketStudyVendor";
// @ts-ignore
import {QuotePublisher} from "../lib/QuotePublisher";
import {AutomaticQuoteBot} from "./AutomaticQuoteBot";


export class Application {

    static main(args: string[]) {
        let bot = new AutomaticQuoteBot();
        bot.sendAllQuotes("FAST");
    }
}
