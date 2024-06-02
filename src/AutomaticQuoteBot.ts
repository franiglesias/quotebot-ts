import {AdSpace} from "./AdSpace";
import {BlogAuctionTask} from "./BlogAuctionTask";

export class AutomaticQuoteBot {

    sendAllQuotes(mode: string) {
        let blogs = AdSpace.getAdSpaces();
        for (const blog in blogs) {
            let blocAuctionTask = new BlogAuctionTask();
            blocAuctionTask.priceAndPublish(blog, mode);
        }
    }
}
