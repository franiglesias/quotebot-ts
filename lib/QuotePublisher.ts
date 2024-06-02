/*
* This simulates a production service that you should not call directly from a not-production environment
* You are not allowed to touch this file
*
* */

export class QuotePublisher {

    static publish(proposal: number) {
        console.log("You've pushed a dummy auction to a real ads platform, the business is upset!")
        process.exit(-1)
    }
}
