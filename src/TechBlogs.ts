/*
This simulates a very slow database connection

You are not supposed to touch this file
 */

async function sleep(time: number): Promise<void> {
    return new Promise(
        (resolve) => setTimeout(resolve, time)
    );
}

export class TechBlogs {

    static listAllBlogs() {
        sleep(5000);

        return [
            "HackerNews",
            "Reddit",
            "TechCrunch",
            "BuzzFeed",
            "TheHuffPost",
            "TMZ",
            "GigaOM"
        ];
    }
}
