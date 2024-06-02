import {AdSpace} from "./AdSpace";
import {BlogAuctionTask} from "./BlogAuctionTask";

export class AutomaticQuoteBot {

    sendAllQuotes(mode: string) {
        const blogs = AdSpace.getAdSpaces();
        for (const blog in blogs) {
            const blocAuctionTask = new BlogAuctionTask();
            blocAuctionTask.priceAndPublish(blog, mode);
        }
    }
}
