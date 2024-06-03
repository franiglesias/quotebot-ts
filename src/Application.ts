import {AutomaticQuoteBot} from "./AutomaticQuoteBot";


export class Application {

    static main(args: string[] = []) {
        const bot = new AutomaticQuoteBot();
        bot.sendAllQuotes("FAST");
    }
}
