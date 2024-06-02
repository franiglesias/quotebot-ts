import {MarketStudyVendor} from "../lib/MarketStudyVendor";
import {QuotePublisher} from "../lib/QuotePublisher";

export class BlogAuctionTask {
    private marketDataRetriever: MarketStudyVendor = new MarketStudyVendor;

    priceAndPublish(blog: string, mode: string) {
        let avgPrice = this.marketDataRetriever.averagePrice(blog);

        let proposal = avgPrice + 1;
        let timeFactor = 1;

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
            proposal = 3.14 * proposal
        } else {
            proposal = 3.15 * timeFactor * Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000);
        }


        QuotePublisher.publish(proposal);
    }
}
